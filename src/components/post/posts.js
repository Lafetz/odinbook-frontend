import { useContext, useState } from "react";
import { useEffect } from "react";
import { PostsContext } from "../../pages/Home";
import { LoadingError } from "../errors/profileError";
import { Post } from "./Post";
export const Posts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [error, setError] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetch("https://odinbook-backend-c0h2.onrender.com/posts", {
      method: "Get",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res.json().then((posts) => {
            setPosts(posts);
          });
        } else if (res.status === 401) {
          //go to login
        } else {
          setError(true);
        }
      })
      .catch((err) => {});
  }, [setPosts, setError]);
  return (
    <>
      {" "}
      {error && <LoadingError error="Server Error" />}
      {posts.map((post, index) => {
        return <Post key={post._id} post={post} index={index} />;
      })}
    </>
  );
};
