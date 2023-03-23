import { useContext, useState } from "react";
import { PostsContext } from "../../pages/Home";
import { UserContext } from "../context/userContext";

export const Remove = ({ index, post }) => {
  const { user } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [loading, setLoading] = useState(false);

  const remove = (e) => {
    e.target.disabled = true;

    setLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`https://odinbook-backend-c0h2.onrender.com/posts/${post._id}`, {
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
        <span className="w-full">
          {loading && (
            <button className=" w-full hover:bg-red py-1 loading rounded-xl px-1 bg-btnInput">
              <div
                className="inline-block h-3 w-3 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>{" "}
              Remove
            </button>
          )}
          {!loading && (
            <button
              className="w-full hover:bg-red py-1 rounded-xl px-1 bg-btnInput"
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
