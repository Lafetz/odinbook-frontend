import { useContext, useState } from "react";
import { PostsContext } from "../../pages/Home";
import { UserContext } from "../context/userContext";

export const Remove = ({ index, post }) => {
  const { user, setUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [loading, setLoading] = useState(false);

  const remove = (e) => {
    e.target.disabled = true;

    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/posts/${post._id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((res) => {
      e.target.disabled = true;
      setLoading(false);
      if (res.status === 200) {
        setPosts([...posts.slice(0, index), ...posts.slice(index + 1)]);
      }
    });
  };

  return (
    <>
      {user._id === post.userId._id && (
        <span>
          {loading && (
            <button className="w-full hover:bg-red py-1 loading rounded-xl px-1 bg-mainBg">
              Remove
            </button>
          )}
          {!loading && (
            <button
              className="w-full hover:bg-red py-1 rounded-xl px-1 bg-mainBg"
              onClick={remove}
            >
              Remove
            </button>
          )}
        </span>
      )}
    </>
  );
};
