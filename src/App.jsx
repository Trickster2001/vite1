import Login from "./components/Login";
import Profle from "./components/Profle";
import UserContextProvider from "./context/UserContextProvider";

function App() {

 
  return (
    <UserContextProvider>
      <Login />
      <Profle />
    </UserContextProvider>
);
}

export default App