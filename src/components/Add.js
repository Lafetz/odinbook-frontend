import { useContext, useState } from "react";
import { PostsContext } from "../pages/Home";
import { uploadPic } from "../utils/firebase";
export const Add = ({ error }) => {
  const { posts, setPosts } = useContext(PostsContext);
  const [post, setPost] = useState(" ");

  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState(null);
  const picChange = (e) => {
    const file = e.target.files[0];

    setPic(file);
  };
  const postChange = (e) => {
    setPost(e.target.value);
  };
  const addPost = (e) => {
    e.preventDefault();

    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    fetch(`https://odinbook-backend-c0h2.onrender.com/posts`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.token,
      },
      body: JSON.stringify({ content: post, img: pic ? true : false }),
    })
      .then((res) => {
        if (res.status === 200 && res.status !== undefined) {
          setPost("");
          setPic(null);
          return res.json();
        } else {
        }
      })
      .then(async (post) => {
        if (pic) {
          await uploadPic(pic, "post", post._id);
        }
        setLoading(false);
        setPosts([post, ...posts]);
      });
  };
  return (
    <>
      {" "}
      {!error && (
        <div className="m-auto my-10 flex flex-col p-4 max-w-screen-sm rounded-2xl  bg-cardBg">
          <div className="flex gap-4 items-center">
            <form className="w-full flex flex-col gap-2" id="form">
              <textarea
                className="textarea textarea-md w-full bg-btnInput"
                value={post}
                onChange={postChange}
              ></textarea>
              <div className="flex flex-wrap gap-3 justify-between items-center">
                <div className="flex flex-col">
                  <label htmlFor="image" className="font-bold">
                    Choose Image
                  </label>
                  <input
                    key={pic || ""}
                    className="file-input  file-input-bordered file-input-xs file-input-primary bg-cardBg text-white "
                    accept="image/x-png, image/jpeg"
                    required
                    id="image"
                    type="file"
                    onChange={picChange}
                  />{" "}
                </div>

                {!loading && (
                  <button
                    onClick={addPost}
                    className="btn btn-sm self-end hover:bg-mainBg"
                  >
                    Post
                  </button>
                )}
                {loading && (
                  <button className="btn btn-sm loading ">Post</button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
