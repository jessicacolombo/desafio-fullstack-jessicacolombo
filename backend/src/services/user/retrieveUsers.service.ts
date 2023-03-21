import { userWithoutPassword } from "./../../schemas/user.schema";
import { User } from "./../../entities/user.entity";
import AppDataSource from "../../data-source";

export const retrieveUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const foundUser = await userRepository.findOneBy({
    id: userId,
  });

  const usersToShow = await userWithoutPassword.validate(foundUser, {
    stripUnknown: true,
  });

  return usersToShow;
};
