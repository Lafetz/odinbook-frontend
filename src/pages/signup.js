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
  const [success, setSuccess] = useState(false);
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
      username: username.replace(/\s+/g, ""),
      password: password,
    };

    const res = await fetch(
      "https://odinbook-backend-c0h2.onrender.com/auth/signup",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      }
    );

    if (res.status === 200) {
      const user = await res.json();
      if (profilePic) {
        await uploadPic(profilePic, "profile", user._id);
      }
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setLoading(false);
    } else if (res.status === 401) {
    } else {
    }
  };
  return (
    <>
      {success && (
        <div className="alert alert-success shadow-lg absolute w-fit px-12 top-4 left-0 right-0 m-auto">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Sign Up Successful! Login to continue</span>
          </div>
        </div>
      )}

      <div className="w-full min-h-screen p-2 flex justify-center items-center bg-mainBg text-white">
        <div className="bg-cardBg p-6 px-4 rounded-2xl text-white flex flex-col gap-2 ">
          <h1 className="font-bold w-fit m-auto text-xl">Join OdinBook!</h1>
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
                <span className="label-text text-white">Full Name</span>
              </label>
              <input
                minLength="6"
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
                <span className="label-text text-white">Username</span>
              </label>
              <input
                pattern="^[a-zA-Z0-9](.*[a-zA-Z0-9])?$"
                minLength="6"
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
                minLength="6"
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
              <input
                id="Image"
                type="file"
                onChange={picChange}
                className="file-input file-input-primary file-input-bordered file-input-md w-full bg-btnInput max-w-xs text-white"
              />
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
              Login
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};
