import { useLocation } from "react-router-dom";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
export const Modal = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const logout = () => {
    window.localStorage.removeItem("token");
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
          <button className="btn bg-red w-fit">Log out</button>
        </label>
      </label>
    </>
  );
};
