import { useContext } from "react";
import { PostsContext } from "../../pages/Home";
import { UserContext } from "../context/userContext";

export const LikeBtn = ({ post }) => {
  const { user, setUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const like = (e) => {
    e.target.disabled = true;
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/posts/${post._id}/like`, {
      method: "POST",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    })
      .then((res) => {
        e.target.disabled = false;
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((post) => {
        const newposts = posts.map((oldPost) => {
          if (oldPost._id == post._id) {
            return post;
          } else {
            return oldPost;
          }
        });
        setPosts(newposts);

        // );
      });
  };
  const unlike = (e) => {
    e.target.disabled = true;
    const token = JSON.parse(localStorage.getItem("token"));
    fetch(`http://localhost:8080/posts/${post._id}/like`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    })
      .then((res) => {
        e.target.disabled = false;
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((post) => {
        const newposts = posts.map((oldPost) => {
          if (oldPost._id == post._id) {
            return post;
          } else {
            return oldPost;
          }
        });
        setPosts(newposts);
      });
  };
  return (
    <>
      {post.likedBy.includes(user._id) && (
        <button
          onClick={unlike}
          className="w-full bg-sideC hover:bg-red py-1 rounded-xl "
        >
          unlike
        </button>
      )}
      {!post.likedBy.includes(user._id) && (
        <button
          onClick={like}
          className="w-full hover:bg-sideC py-1 rounded-xl bg-mainBg"
        >
          like
        </button>
      )}
    </>
  );
};
