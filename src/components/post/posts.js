import { useContext, useState } from "react";
import { useEffect } from "react";
import { PostsContext } from "../../pages/Home";
import { Post } from "./Post";
export const Posts = () => {
  const { posts, setPosts } = useContext(PostsContext);

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
      {posts.map((post, index) => {
        return <Post key={post._id} post={post} index={index} />;
      })}
    </>
  );
};
