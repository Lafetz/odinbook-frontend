import { useState } from "react";
import { Post } from "./Post";
import { useEffect } from "react";
export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetch("http://localhost:8080/posts", {
      method: "Get",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((posts) => {
          setPosts(posts);
          console.log(posts);
        });
      } else if (res.status === 401) {
        //go to login
      } else {
        //idk
      }
    });
  }, []);
  return (
    <>
      {posts.map((post) => {
        <Post key={post._id} />;
      })}
    </>
  );
};
