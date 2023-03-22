import { useState } from "react";

export const RequestBtns = ({ id, setOwner }) => {
  const [loadinga, setLoadinga] = useState(false);
  const [loadingr, setLoadingr] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));
  const accept = () => {
    setLoadinga(true);
    fetch(`https://odinbook-backend-c0h2.onrender.com/user/accept`, {
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
        setLoadinga(false);
        return res.json();
      })
      .then((owner) => {
        setOwner(owner);
      });
  };
  const reject = () => {
    setLoadingr(true);
    fetch(`http://localhost:8080/user/reject`, {
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
        setLoadingr(false);
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((owner) => {
        setOwner(owner);
      });
  };
  return (
    <div className="flex gap-2">
      {!loadinga && (
        <button className="btn btn-sm bg-sideC" onClick={accept}>
          Accept
        </button>
      )}
      {loadinga && (
        <button className="btn btn-sm loading bg-sideC">Accept</button>
      )}
      {!loadingr && (
        <button className="btn  btn-sm bg-red" onClick={reject}>
          Reject
        </button>
      )}
      {loadingr && (
        <button className="btn  btn-sm loading bg-red">Reject</button>
      )}
    </div>
  );
};
