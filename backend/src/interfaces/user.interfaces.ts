export interface IUserRequest {
  name: string;
  email: string;
  cellphone: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  cellphone?: string;
}
