import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema } from "../validations/contact";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../contexts/userContext";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const { contacts, setContacts } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const onSubmit = async ({ name, cellphone, email }) => {
    const contactData = {
      name: name,
      cellphone: cellphone,
      email: email,
    };

    try {
      api.defaults.headers.authorization = `Bearer ${localStorage.getItem(
        "@TOKEN"
      )}`;
      const { data } = await api.post("/contacts", contactData);
      setContacts((contacts) => [...contacts, data]);
      reset();
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error(`${error}`);
    }
  };

  return (
    <ContactsContext.Provider
      value={{
        openModal,
        setOpenModal,
        onSubmit,
        register,
        handleSubmit,
        errors,
        contacts,
        setContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
