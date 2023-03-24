import { StyledCard } from "../../styles/contact";

export const ContactCard = ({ name, email, cellphone }) => {
  return (
    <StyledCard>
      <p>Nome: {name}</p>
      <span>Email: {email}</span>
      <span>Telefone: {cellphone}</span>
    </StyledCard>
  );
};
