import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../pages/Home";
import { uploadImage } from "../utils/uploadImage";

export const Add = () => {
  const { posts, setPosts } = useContext(PostsContext);
  const [post, setPost] = useState(" ");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState(null);
  useEffect(() => {
    console.log(process.env.REACT_APP_SECRET_NAME);
  }, []);
  const picChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setPic(file);
  };
  const postChange = (e) => {
    setPost(e.target.value);
  };
  const addPost = (e) => {
    e.preventDefault();
    uploadImage(pic);
    // e.preventDefault();
    // const token = JSON.parse(localStorage.getItem("token"));
    // setLoading(true);
    // fetch(`http://localhost:8080/posts`, {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + token.token,
    //   },
    //   body: JSON.stringify({ content: post, img: pic }),
    // })
    //   .then((res) => {
    //     setLoading(false);
    //     if (res.status == 200 && res.status !== undefined) {
    //       setPost("");
    //       return res.json();
    //     } else {
    //     }
    //   })
    //   .then((post) => {
    //     // setPosts([post, ...posts]);
    //   });
  };
  return (
    <div className="m-auto my-10 flex flex-col p-4 max-w-screen-sm rounded-2xl  bg-cardBg">
      <div className="flex gap-4 items-center">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-xl">K</span>
          </div>
        </div>
        <form className="w-full flex flex-col gap-2" id="form">
          <textarea
            className="textarea  textarea-sm w-full resize-none bg-btnInput"
            value={post}
            onChange={postChange}
          ></textarea>
          <div className="flex justify-between ">
            <div className="form-control">
              <label htmlFor="image" className="label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  aria-label="image"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </label>
              <input required id="image" type="file" onChange={picChange} />
            </div>

            {!loading && (
              <button onClick={addPost} className="btn btn-sm">
                Post
              </button>
            )}
            {loading && <button className="btn btn-sm loading">Post</button>}
          </div>
        </form>
      </div>
    </div>
  );
};
