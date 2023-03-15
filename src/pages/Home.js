import { Profile } from "../components/profile";
import { Add } from "../components/Add";
import { Posts } from "../components/post/posts";
import { Modal } from "../components/logout/logoutModal";
import { createContext, useEffect, useState } from "react";
export const PostsContext = createContext(null);
export const Home = () => {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <div className="">
        <Modal />
        <div className="pb-5 min-h-screen bg-mainBg text-white px-3">
          <Profile />
          <Add />
          <Posts />
        </div>
      </div>
    </PostsContext.Provider>
  );
};
