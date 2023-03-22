import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RequestBtns } from "./requestBtns";
export const FriendRequest = ({ id, setOwner }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`https://odinbook-backend-c0h2.onrender.com/user/${id}`, {
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
  }, [id]);
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
            <Link to={`/profile/${user._id}`} state={user}>
              <div className="">{user.Name}</div>
              <div className="font-light">@{user.username}</div>
            </Link>
          </div>
        </div>
        <RequestBtns id={user._id} setOwner={setOwner} />
      </div>
    )
  );
};
