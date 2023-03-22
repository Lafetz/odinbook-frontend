import { useState } from "react";
import { Comments } from "./showComments";

export const AddComment = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const commentChange = (e) => {
    setComment(e.target.value);
  };

  const AddComment = (e) => {
    setLoading(true);
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(
      `https://odinbook-backend-c0h2.onrender.com/posts/${post._id}/comments`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.token,
        },
        body: JSON.stringify({ content: comment }),
      }
    )
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          setComment("");
          return res.json();
        }
      })
      .then((comment) => {
        setComments([comment, ...comments]);
      });
  };
  return (
    <div className="max-w-screen-sm m-auto ">
      <form className="flex w-11/12 m-auto">
        <textarea
          onChange={commentChange}
          value={comment}
          className="textarea  textarea-xs w-full resize-none bg-btnInput rounded-tr-none rounded-br-none"
        ></textarea>
        {!loading && (
          <button
            onClick={AddComment}
            className="btn rounded-tl-none rounded-bl-none bg-sideC"
          >
            Add
          </button>
        )}
        {loading && (
          <button className="btn rounded-tl-none loading rounded-bl-none bg-sideC">
            Add
          </button>
        )}
      </form>
      <Comments post={post} comments={comments} setComments={setComments} />
    </div>
  );
};
//
