import { useContext } from "react";
import { ContactCard } from "../components/contactCard";
import { Header } from "../components/header";
import { UserContext } from "../contexts/userContext";
import { StyledSection } from "../styles/contact";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Header />
      <StyledSection>
        <div className="section-header">
          <h2>Seus contatos: </h2>
          <button>+</button>
        </div>
        {user.contacts.length > 0 ? (
          <ul>
            {user.contacts.map((contact) => {
              return (
                <ContactCard
                  key={contact.id}
                  name={contact.name}
                  cellphone={contact.cellphone}
                  email={contact.email}
                />
              );
            })}
          </ul>
        ) : (
          <p>
            Voce ainda não possui contatos cadastrados, que tal adicionar um
            novo?{" "}
          </p>
        )}
      </StyledSection>
    </div>
  );
};
