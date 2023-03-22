import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ExampleUser } from "../components/exampleUser";

export const Login = () => {
  const navigate = useNavigate();

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
    const res = await fetch(
      "https://odinbook-backend-c0h2.onrender.com/auth/login",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
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
      <div className="bg-cardBg p-6 px-5 rounded-2xl text-white flex flex-col gap-2">
        <h1 className="font-bold w-fit m-auto text-xl">Login to OdinBook</h1>
        <form onSubmit={submitForm} className="flex flex-col gap-2">
          <div className="form-control">
            <label htmlFor="username" className="label">
              <span className="label-text text-white">Email:</span>
            </label>
            <input
              required
              onChange={usernameChange}
              id="username"
              type="text"
              placeholder="username"
              className="input input-bordered bg-btnInput"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text text-white">Password:</span>
            </label>
            <input
              required
              onChange={passwordChange}
              type="password"
              placeholder="password"
              id="password"
              className="input input-bordered bg-btnInput"
            />
          </div>
          {error && (
            <span className=" text-red">incorrect username or password</span>
          )}
          <div className="form-control mt-6">
            {!loading && (
              <button className="btn bg-sideC hover:bg-sideD text-white">
                Login
              </button>
            )}
            {loading && (
              <button className="btn bg-sideC hover:bg-sideD loading text-white">
                Login
              </button>
            )}
          </div>
        </form>

        <div className="divider  before:bg-sideC after:bg-sideC ">or</div>
        <ExampleUser />
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
