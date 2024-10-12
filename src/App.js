import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Userprofile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {isAuthenticated ? <Userprofile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
