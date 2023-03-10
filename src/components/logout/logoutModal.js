import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
export const Modal = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
    navigate("/login");
  };
  return (
    <>
      {" "}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer ">
        <label
          className="modal-box  bg-mainBg relative flex justify-center  items-center gap-5 flex-col"
          htmlFor=""
        >
          <h1 className="text-lg font-bold w-fit text-white">Are you sure?</h1>
          <button onClick={logout} className="btn bg-red w-fit">
            Log out
          </button>
        </label>
      </label>
    </>
  );
};
