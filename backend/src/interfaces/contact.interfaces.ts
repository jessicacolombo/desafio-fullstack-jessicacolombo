export interface IContactRequest {
  name: string;
  email: string;
  cellphone: string;
}

export interface IContact extends IContactRequest {
  insertedAt: string;
}
