import { UserContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PersonState = ({ personState }) => {
  const [person, setPerson] = useState(personState);
  const { user } = useContext(UserContext);

  const [request, setRequest] = useState(false);
  const [requestr, setRequestr] = useState(false);
  const [requesty, setRequesty] = useState(false);
  const [requestf, setRequestf] = useState(false);
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      const r = user.friendRequest.includes(person._id); //user sent request
      const y = person.friendRequest.includes(user._id); //request sent
      const f = person.friendList.includes(user._id);
      setRequestr(r);
      setRequesty(y);
      setRequestf(f);
      if (r === false && y === false) {
        if (!f) {
          setRequest(true);
        }
      }
    }
  }, [person, user]);
  const sendRequest = (e) => {
    e.target.disabled = true;
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`https://odinbook-backend-c0h2.onrender.com/user/request`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({ id: person._id }),
    })
      .then((res) => {
        e.target.disabled = false;
        if (res.status === 200) {
          setRequest(false);
          return res.json();
        }
      })

      .then((newperson) => {
        setPerson(newperson);
      });
  };
  return (
    <div className="flex gap-2 justify-between bg-cardBg m-auto p-2 max-w-screen-sm rounded-2xl border-solid w-full">
      <div className="flex gap-2">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            {person.img && <img src={person.imgUrl} alt="profile" />}
            {!person.img && <span className="text-md">{person.Name[0]}</span>}
          </div>
        </div>
        <div>
          <Link to={`/profile/${user._id}`} state={person}>
            <div className="hover:underline">{person.Name}</div>
            <div className="font-light hover:underline">@{person.username}</div>
          </Link>
        </div>
      </div>
      {user._id !== person._id && (
        <span>
          {request && (
            <button className="btn  btn-sm bg-sideC " onClick={sendRequest}>
              Send Request
            </button>
          )}
          {requestr && (
            <button className="btn  btn-sm bg-sideC ">user sent request</button>
          )}
          {requesty && (
            <button className="btn  btn-sm bg-sideC ">Request sent</button>
          )}
          {requestf && (
            <button className="btn  btn-sm bg-sideC ">Friends</button>
          )}
        </span>
      )}
    </div>
  );
};
