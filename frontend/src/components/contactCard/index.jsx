export const ContactCard = ({ name, email, cellphone }) => {
  return (
    <li>
      <p>{name}</p>
      <span>{email}</span>
      <span>{cellphone}</span>
    </li>
  );
};
