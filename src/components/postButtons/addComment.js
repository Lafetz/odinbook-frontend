import { useState } from "react";
import { Comments } from "./showComments";

export const AddComment = ({ post }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState("");
  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const AddComment = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/posts/${post._id}/comments`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({ content: comment }),
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
    <div className="max-w-screen-sm m-auto">
      <form className="flex w-11/12 m-auto">
        <textarea
          onChange={commentChange}
          value={comment}
          className="textarea  textarea-xs w-full resize-none bg-btnInput rounded-tr-none rounded-br-none"
        ></textarea>
        <button
          onClick={AddComment}
          className="btn rounded-tl-none rounded-bl-none bg-sideC"
        >
          Add
        </button>
      </form>
      <Comments post={post} />
    </div>
  );
};
//
