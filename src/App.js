import { Home } from "./pages/Home";
import { Login } from "./pages/login";
import { Friends } from "./pages/friends";
import { HashRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./components/context/userContext";
import { Signup } from "./pages/signup";
import { ProtectRoutes } from "./protectRoutes/protectRoutes";
import { UserProfile } from "./pages/profile";
import { FindPeople } from "./pages/findPeople";
function App() {
  return (
    <HashRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile/:id"
            element={
              <ProtectRoutes>
                <UserProfile />{" "}
              </ProtectRoutes>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectRoutes>
                <Home />
              </ProtectRoutes>
            }
          />
          <Route
            path="/people"
            element={
              <ProtectRoutes>
                <FindPeople />
              </ProtectRoutes>
            }
          />
          <Route
            path="/friends"
            element={
              <ProtectRoutes>
                <Friends />
              </ProtectRoutes>
            }
          />
        </Routes>
      </UserContextProvider>
    </HashRouter>
  );
}

export default App;
