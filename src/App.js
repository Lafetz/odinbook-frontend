import { Home } from "./pages/Home";
import { Login } from "./pages/login";
import { Friends } from "./pages/friends";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./components/context/userContext";
import { Signup } from "./pages/signup";

import { UserProfile } from "./pages/profile";
import { FindPeople } from "./pages/findPeople";
function App() {
  return (
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<FindPeople />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
