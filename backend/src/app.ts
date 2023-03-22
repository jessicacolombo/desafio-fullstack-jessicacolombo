import "express-async-errors";
import express from "express";
import "reflect-metadata";
import { errorHandler } from "./errors/errorHandler";
import { sessionRoutes } from "./routes/session.routes";
import { userRoutes } from "./routes/user.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login", sessionRoutes);
app.use("/contacts", contactsRoutes);

app.use(errorHandler);

export default app;
