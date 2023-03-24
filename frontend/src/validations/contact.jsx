import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
  cellphone: yup.string().required("Insira um telefone de contato"),
});
