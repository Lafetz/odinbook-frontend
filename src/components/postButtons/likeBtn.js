import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const LikeBtn = ({ post }) => {
  console.log(post);
  const { user, setUser } = useContext(UserContext);
  const like = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/posts/${post._id}/like`, {
      method: "POST",
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
  const unlike = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/posts/${post._id}/like`, {
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
    <>
      {post.likedBy.includes(user._id) && (
        <button
          onClick={unlike}
          className="w-full hover:bg-red py-1 rounded-xl bg-mainBg"
        >
          unlike
        </button>
      )}
      {!post.likedBy.includes(user._id) && (
        <button
          onClick={like}
          className="w-full hover:bg-sideC py-1 rounded-xl bg-mainBg"
        >
          like
        </button>
      )}
    </>
  );
};
