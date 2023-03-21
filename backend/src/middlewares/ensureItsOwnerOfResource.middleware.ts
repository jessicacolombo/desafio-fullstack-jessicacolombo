import { AppError } from "./../errors/AppError";
import { User } from "./../entities/user.entity";
import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";

export const ensureItsOwnerOfResourceMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.params.id !== req.user.id) {
    throw new AppError("Must be owner to complete", 401);
  }

  next();
};
