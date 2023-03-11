import { useState } from "react";
import { Comments } from "./showComments";

export const AddComment = () => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState("");
  const commentChange = (e) => {
    setComment(e.target.value);
  };
  const AddComment = () => {};
  return (
    <div className="pr-4">
      <form className="flex ">
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
    </div>
  );
};
//<Comments comments={posts.comment} />
