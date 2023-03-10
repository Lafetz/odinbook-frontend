import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    setLoading(true);
    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (res.status === 200) {
      setLoading(false);
      setError(false);
      const token = await res.json();
      window.localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    } else if (res.status === 401) {
      setLoading(false);
      setError(true);
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-mainBg text-white">
      <div className="bg-cardBg p-6 rounded-2xl text-white flex flex-col gap-2">
        <form onSubmit={submitForm}>
          <div className="form-control">
            <label htmlFor="username" className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              onChange={usernameChange}
              id="username"
              type="text"
              placeholder="username"
              className="input input-bordered bg-btnInput"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              onChange={passwordChange}
              type="text"
              placeholder="password"
              id="password"
              className="input input-bordered bg-btnInput"
            />
          </div>
          {error && <span>incorrect username or password</span>}
          <div className="form-control mt-6">
            {!loading && (
              <button className="btn btn-primary text-white">Login</button>
            )}
            {loading && (
              <button className="btn btn-primary loading text-white">
                Login
              </button>
            )}
          </div>
        </form>
        <span href="#" className="">
          Don't have an account?{" "}
          <Link className="hover:underline" to="/signup">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};
