import { useContext, useState } from "react";
import { useEffect } from "react";
import { PostsContext } from "../../pages/Home";
import { LoadingError } from "../errors/profileError";
import { Post } from "./Post";
export const Posts = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [loadingPosts, setLoadingPosts] = useState(true);
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
        setLoadingPosts(false);
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
      {loadingPosts && (
        <div className="m-auto w-fit">
          <div
            class=" inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      )}
      {posts.map((post, index) => {
        return <Post key={post._id} post={post} index={index} />;
      })}
    </>
  );
};
