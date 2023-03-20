import { useState } from "react";
import { Link } from "react-router-dom";
import { uploadPic } from "../utils/firebase";
export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setPic] = useState(null);
  const picChange = (e) => {
    const file = e.target.files[0];

    setPic(file);
  };
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const signupData = {
      Name: name,
      email: email,
      img: profilePic ? true : false,
      username: username,
      password: password,
    };
    const res = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    });

    if (res.status === 200) {
      const user = await res.json();
      if (profilePic) {
        await uploadPic(profilePic, "profile", user._id);
      }

      setLoading(false);
    } else if (res.status === 401) {
    } else {
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-mainBg text-white">
      <div className="bg-cardBg p-6 rounded-2xl text-white flex flex-col gap-2">
        <form onSubmit={submit}>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              required
              id="email"
              onChange={emailChange}
              type="email"
              placeholder="email"
              className="input input-bordered bg-btnInput"
            />
          </div>
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text text-white">name</span>
            </label>
            <input
              required
              id="name"
              onChange={nameChange}
              type="text"
              placeholder="name"
              className="input input-bordered bg-btnInput"
            />
          </div>
          <div className="form-control">
            <label htmlFor="username" className="label">
              <span className="label-text text-white">username</span>
            </label>
            <input
              required
              id="username"
              type="text"
              onChange={usernameChange}
              placeholder="username"
              className="input input-bordered bg-btnInput"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text text-white">Password</span>
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
          <div className="form-control">
            <label htmlFor="image" className="label">
              <span className="label-text text-white font-bold">
                Profile Picture
              </span>
            </label>
            <input required id="Image" type="file" onChange={picChange} />
          </div>
          <div className="form-control mt-6">
            {!loading && (
              <button className="btn bg-sideC  hover:bg-sideD  text-white">
                Sign up
              </button>
            )}
            {loading && (
              <button className="btn bg-sideC  hover:bg-sideD loading text-white">
                Sign up
              </button>
            )}
          </div>
        </form>
        <span className="">
          You have an account?{" "}
          <Link className="hover:underline" to="/login">
            Log in
          </Link>
        </span>
      </div>
    </div>
  );
};
