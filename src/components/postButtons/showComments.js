import { useState, useEffect } from "react";
import { Comment } from "./comment";
export const Comments = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetch(`http://localhost:8080/posts/${post._id}/comments`, {
      method: "Get",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((res) => {
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
  }, []);
  return (
    <div className="flex flex-col gap-2 mt-2">
      {comments.map((comment) => {
        return <Comment key={comment._id} comment={comment} post={post} />;
      })}
    </div>
  );
};
