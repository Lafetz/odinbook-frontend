import { useContext } from "react";
import { UserContext } from "../context/userContext";
export const Comment = ({ comment, post }) => {
  const { user } = useContext(UserContext);
  const remove = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/posts/${post._id}/comments/${comment._id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
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
    <div className="flex gap-2 rounded-2xl bg-btnInput w-full  px-2 py-1">
      <div className="avatar placeholder h-14">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
          <span className="text-sm">x</span>
        </div>
      </div>
      <div className="w-full">
        <div>
          <div className="flex justify-between">
            <span className="font-semibold">{comment.userId.Name}</span>
            {comment.userId._id == user._id && (
              <button className="btn btn-xs bg-red" onClick={remove}>
                remove
              </button>
            )}
          </div>
          <div className="font-light h-fit">@{comment.userId.username}</div>
        </div>
        <div>{comment.content}</div>
      </div>
    </div>
  );
};
