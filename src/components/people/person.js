import { UserContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";

export const Person = ({ person }) => {
  const { user, setUser } = useContext(UserContext);
  const [request, setRequest] = useState(false);
  const [requestr, setRequestr] = useState(false);
  const [requesty, setRequesty] = useState(false);
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      const r = user.friendRequest.includes(person._id); //user sent request
      const y = person.friendRequest.includes(user._id); //request sent
      setRequestr(r);
      setRequesty(y);
      if (r == false && y == false) {
        setRequest(true);
      }
    }
  }, [user]);
  const sendRequest = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/user/request`, {
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
        if (res.status === 200) {
        }
      })
      .then((x) => {
        console.log(x);
      });
  };
  return (
    <div className="flex gap-2 justify-between bg-cardBg m-auto p-2 max-w-screen-sm rounded-2xl border-solid w-full">
      <div className="flex gap-2">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <span>MX</span>
          </div>
        </div>
        <div>
          <div className="">{person.Name}</div>
          <div className="font-light">{person.username}</div>
        </div>
      </div>
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
    </div>
  );
};