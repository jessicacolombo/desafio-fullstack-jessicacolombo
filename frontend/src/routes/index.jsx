import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { NotFound } from "../pages/notFound";
import { Register } from "../pages/register";
import { ProtectedRoutes } from "../components/protectedRoutes";
import { Dashboard } from "../pages/dashboard";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
