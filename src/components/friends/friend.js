import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Friend = ({ id, setOwner }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
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
        //idk
      }
    });
  }, []);
  const remove = () => {
    setLoading(true);
    fetch(`http://localhost:8080/user/remove`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((owner) => {
        setOwner(owner);
      });
  };
  return (
    Object.keys(user).length > 0 && (
      <div
        key={id}
        className="flex gap-2 justify-between bg-cardBg my-4 m-auto p-2 max-w-screen-sm rounded-2xl border-solid"
      >
        <div className="flex gap-2">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              {user.img && <img src={user.imgUrl} />}
              {!user.img && <span className="text-md">{user.Name[0]}</span>}
            </div>
          </div>
          <div>
            <Link to={`/profile/${user._id}`} state={user}>
              {" "}
              <div className="">{user.Name}</div>
              <div className="font-light">@{user.username}</div>
            </Link>
          </div>
        </div>
        {!loading && (
          <button className="btn  btn-sm bg-red" onClick={remove}>
            Remove
          </button>
        )}
        {loading && (
          <button className="btn  btn-sm loading bg-red">Remove</button>
        )}
      </div>
    )
  );
};
