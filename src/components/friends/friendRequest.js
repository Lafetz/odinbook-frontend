import { useEffect, useState } from "react";
import { RequestBtns } from "./requestBtns";
export const FriendRequest = ({ id }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/user/${id}`, {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then(async (res) => {
      if (res.status === 200) {
        res.json().then((user) => {
          setUser(user);
        });
      } else if (res.status === 401) {
        //go to login
      } else {
        //idk  key={user._id}
      }
    });
  }, []);
  return (
    Object.keys(user).length > 0 && (
      <div
        key={id}
        className="flex gap-2 justify-between bg-cardBg my-4 m-auto p-2 max-w-screen-sm rounded-2xl border-solid"
      >
        <div className="flex gap-2">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <span>MX</span>
            </div>
          </div>
          <div>
            <div className="">{user.Name}</div>
            <div className="font-light">@{user.username}</div>
          </div>
        </div>
        <RequestBtns id={user._id} />
      </div>
    )
  );
};
