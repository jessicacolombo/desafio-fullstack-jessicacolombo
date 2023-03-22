import { User } from "./../entities/user.entity";
import { AppError } from "./../errors/AppError";
import { Contact } from "./../entities/contact.entity";
import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";
import AppDataSource from "../data-source";

export const ensureItsContactOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let userToken: string = req.headers.authorization;
  userToken = userToken.split(" ")[1];

  const contactsRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const foundContact = await contactsRepository.findOne({
    where: {
      id: req.params.id,
    },
    relations: {
      user: true,
    },
  });

  if (!foundContact) {
    throw new AppError("Contact not found", 404);
  }

  const { sub: userId } = decode(userToken);

  const user = await userRepository.findOneBy({
    id: userId.toString(),
  });

  if (foundContact.user.id !== user.id) {
    throw new AppError("Must bem owner of the contact to edit or delete", 401);
  }

  next();
};
