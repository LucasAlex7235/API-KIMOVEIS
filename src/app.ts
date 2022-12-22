import "express-async-errors";
import "reflect-metadata";
import express from "express";
import userRouter from "./routers/users.router";
import { errorHandler } from "./errors/errors";
import loginRouter from "./routers/login.router";
import schedulesRouter from "./routers/schedules.router";
import categoriesRouter from "./routers/categories.router";
import propertiesRouter from "./routers/properties.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/schedules", schedulesRouter);
app.use("/categories", categoriesRouter);
app.use("/properties", propertiesRouter);

app.use(errorHandler);

export default app;
