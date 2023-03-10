import { Home } from "./pages/Home";
import { Login } from "./pages/login";
import { Friends } from "./pages/friends";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./components/context/userContext";
import { Signup } from "./pages/signup";
import { ProtectRoutes } from "./components/context/protectroutes";
function App() {
  return (
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
