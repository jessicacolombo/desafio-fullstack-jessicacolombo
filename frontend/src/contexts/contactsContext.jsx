import { createContext, useState } from "react";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ContactsContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ContactsContext.Provider>
  );
};
