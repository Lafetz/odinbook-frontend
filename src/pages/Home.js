import { Profile } from "../components/profile";
import { Add } from "../components/Add";
import { Posts } from "../components/post/posts";
import { Modal } from "../components/logout/logoutModal";
import { createContext, useState } from "react";
import { LoadingError } from "../components/errors/profileError";

export const PostsContext = createContext(null);
export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {error && <LoadingError error="Connection Error:check your network" />}
      <div className="">
        <Modal />
        <div className="pb-5 min-h-screen bg-mainBg text-white px-3">
          <Profile setError={setError} error={error} />
          <Add error={error} />
          <Posts />
        </div>
      </div>
    </PostsContext.Provider>
  );
};
