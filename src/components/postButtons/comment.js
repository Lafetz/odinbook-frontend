import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
export const Comment = ({ comment, post, index, setComments, comments }) => {
  const { user } = useContext(UserContext);
  const [Loading, setLoading] = useState(false);
  const remove = (e) => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(
      `https://odinbook-backend-c0h2.onrender.com/posts/${post._id}/comments/${comment._id}`,
      {
        method: "DELETE",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + token.token,
        },
      }
    ).then((res) => {
      setLoading(false);
      if (res.status === 200) {
        setComments([
          ...comments.slice(0, index),
          ...comments.slice(index + 1),
        ]);
      }
    });
  };
  return (
    <div className="flex gap-2 rounded-2xl bg-btnInput w-full  px-2 py-1 ">
      <div className="avatar placeholder h-14">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-14">
          <span className="text-sm">x</span>
        </div>
      </div>
      <div className="w-full ">
        <div className="flex justify-between">
          {" "}
          <Link to={`/profile/${post.userId._id}`} state={post.userId}>
            <div className="hover:underline flex justify-between">
              <span className="font-semibold">{comment.userId.Name}</span>
            </div>
            <div className="hover:underline font-light h-fit">
              @{comment.userId.username}
            </div>
          </Link>
          {comment.userId._id === user._id && (
            <>
              {!Loading && (
                <button
                  className="btn btn-xs bg-red hover:bg-redD"
                  onClick={remove}
                >
                  remove
                </button>
              )}
              {Loading && (
                <button className="btn loading btn-xs bg-red hover:bg-redD">
                  remove
                </button>
              )}
            </>
          )}
        </div>
        <div>{comment.content}</div>
      </div>
    </div>
  );
};
