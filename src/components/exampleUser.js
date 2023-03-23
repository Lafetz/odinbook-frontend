import { useState } from "react";

import { useNavigate } from "react-router-dom";
export const ExampleUser = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();
    const loginData = {
      username: "example",
      password: "123456789",
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

      const token = await res.json();
      window.localStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    } else if (res.status === 401) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="form-control ">
      {!loading && (
        <button
          onClick={submitForm}
          className="btn bg-sideC hover:bg-sideD text-white"
        >
          Login as Example User
        </button>
      )}
      {loading && (
        <button className="btn bg-sideC hover:bg-sideD loading text-white">
          Login as Example User
        </button>
      )}
    </div>
  );
};
