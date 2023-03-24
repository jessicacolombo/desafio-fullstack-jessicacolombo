import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { StyledHeader } from "../../styles/header";

export const Header = () => {
  const { user, logOut } = useContext(UserContext);
  return (
    <StyledHeader>
      <div className="header-container">
        <div className="infos-container">
          <h2>Bem, vindo(a), {user.name}</h2>
          <div>
            <span>
              {user.cellphone} - {user.email}
            </span>
          </div>
        </div>
        <button onClick={logOut}>sair</button>
      </div>
    </StyledHeader>
  );
};
