import { createContext, useEffect, useState } from "react";
import { loginSchema } from "../validations/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { registerSchema } from "../validations/register";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@ID");
      if (token && id) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}`);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    loadUser();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async ({ email, password }) => {
    const userData = {
      email: email,
      password: password,
    };
    try {
      const { data } = await api.post("/login", userData);
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", data.token);
      window.localStorage.setItem("@ID", data.user.id);

      setUser(data.user);
      api.defaults.headers.authorization = `Bearer ${data.token}`;
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Combinação errada de email / senha");
    }
    reset();
  };

  const logOut = () => {
    window.localStorage.clear();
    navigate("/");
    setUser(null);
  };

  const {
    register: registerRegister,
    handleSubmit: registerHandleSubmit,
    reset: registerReset,
    formState: { errors: registerErrors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmitRegister = async ({ email, password, name, cellphone }) => {
    const newUser = {
      email: email,
      password: password,
      name: name,
      cellphone: cellphone,
    };

    try {
      await api.post("/users", newUser);
      toast.success("Usuário criado com sucesso!");
      navigate("/");
    } catch {
      toast.error("Email já cadastrado");
    }

    registerReset();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        onSubmit,
        logOut,
        register,
        handleSubmit,
        errors,
        registerRegister,
        registerHandleSubmit,
        registerErrors,
        onSubmitRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};