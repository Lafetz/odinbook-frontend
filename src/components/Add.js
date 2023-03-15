import { useContext, useState } from "react";
import { PostsContext } from "../pages/Home";

export const Add = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [post, setPost] = useState(" ");
  const [loading, setLoading] = useState(false);
  const postChange = (e) => {
    setPost(e.target.value);
  };
  const addPost = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    fetch(`http://localhost:8080/posts`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({ content: post }),
    })
      .then((res) => {
        setLoading(false);
        if (res.status == 200 && res.status !== undefined) {
          setPost("");
          return res.json();
        } else {
        }
      })
      .then((post) => {
        setPosts([post, ...posts]);
      });
  };
  return (
    <div className="m-auto my-10 flex flex-col p-4 max-w-screen-sm rounded-2xl  bg-cardBg">
      <div className="flex gap-4 items-center">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-xl">K</span>
          </div>
        </div>
        <form
          className="w-full"
          id="form"
          onSubmit={() => {
            console.log("hhhh");
          }}
        >
          <textarea
            className="textarea  textarea-sm w-full resize-none bg-btnInput"
            value={post}
            onChange={postChange}
          ></textarea>
        </form>
      </div>
      <div className="flex justify-end ">
        {!loading && (
          <button onClick={addPost} className="btn btn-sm">
            Post
          </button>
        )}
        {loading && <button className="btn btn-sm loading">Post</button>}
      </div>
    </div>
  );
};
