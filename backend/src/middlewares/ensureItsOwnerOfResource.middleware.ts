import { AppError } from "./../errors/AppError";
import { Request, Response, NextFunction } from "express";

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
