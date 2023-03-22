import { useEffect } from "react";
import { Comment } from "./comment";
export const Comments = ({ post, comments, setComments }) => {
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetch(
      `https://odinbook-backend-c0h2.onrender.com/posts/${post._id}/comments`,
      {
        method: "Get",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + token.token,
        },
      }
    ).then((res) => {
      if (res.status === 200) {
        res.json().then((comments) => {
          setComments(comments);
        });
      } else if (res.status === 401) {
        //go to login
      } else {
        //idk
      }
    });
  }, [post, setComments]);
  return (
    <div className="flex flex-col gap-2 mt-2">
      {comments.map((comment, i) => {
        return (
          <Comment
            key={comment._id}
            comment={comment}
            post={post}
            index={i}
            comments={comments}
            setComments={setComments}
          />
        );
      })}
    </div>
  );
};
