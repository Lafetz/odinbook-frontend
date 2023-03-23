import { useEffect } from "react";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Logout } from "./logout/logout.js";

export const Profile = ({ setError, error }) => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      navigate("/login");
    }

    fetch("https://odinbook-backend-c0h2.onrender.com/user/owner", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((user) => {
            setUser(user);
          });
        } else if (res.status === 401) {
          navigate("/login");
        } else {
          //idk
        }
      })
      .catch((err) => {
        setError(true);
      });
  }, [navigate, setUser, setError]);
  return (
    <>
      <div className="py-4 border-b-2 border-white ">
        {!error && (
          <div className="max-w-screen-md m-auto h-full flex justify-between items-center">
            <Link to="/">
              <div className="hover:bg-sideC p-1 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 "
                  aria-labelledby="home"
                >
                  <title id="home">Home</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
            </Link>

            <div className="flex gap-6 h-9">
              {Object.keys(user).length > 0 && (
                <Link to="/friends">
                  {" "}
                  <div className="hover:bg-sideC p-1 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6  "
                      aria-labelledby="friends"
                    >
                      {" "}
                      <title id="friends">friends</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                </Link>
              )}

              {!Object.keys(user).length > 0 && (
                <div
                  class="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              )}
              {Object.keys(user).length > 0 && (
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className=" ">
                    <div className="flex gap-2 items-center bg-sideC hover:bg-sideD p-1 rounded-2xl ">
                      {Object.keys(user).length > 0 && (
                        <div className="avatar placeholder">
                          <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                            {user.img && (
                              <img src={user.imgUrl} alt="profile" />
                            )}
                            {!user.img && (
                              <span className="text-xl">{user.Name[0]}</span>
                            )}
                          </div>
                        </div>
                      )}
                      {Object.keys(user).length > 0 && (
                        <span className="font-semibold">
                          {user.Name.substring(0, 9)}
                        </span>
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu py-2 px-3 rounded-box w-52 bg-cardBg"
                  >
                    <li className="hover:bg-mainBg">
                      <Logout />
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
