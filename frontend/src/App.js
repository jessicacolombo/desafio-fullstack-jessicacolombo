import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/userContext";
import "react-toastify/dist/ReactToastify.css";
import { ContactsProvider } from "./contexts/contactsContext";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <UserProvider>
        <ContactsProvider>
          <RoutesMain />
        </ContactsProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
