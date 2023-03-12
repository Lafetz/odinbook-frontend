export const RequestBtns = ({ id }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const accept = () => {
    fetch(`http://localhost:8080/user/accept`, {
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
        return res.json();
      })
      .then((x) => {
        console.log(x);
      });
  };
  const reject = () => {
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
        if (res.status === 200) {
          console.log("rejected");
        }
      })
      .then((x) => {
        console.log(x);
      });
  };
  return (
    <div className="flex gap-2">
      <button className="btn btn-sm bg-sideC" onClick={accept}>
        Accept
      </button>
      <button className="btn  btn-sm bg-red" onClick={reject}>
        Reject
      </button>
    </div>
  );
};
