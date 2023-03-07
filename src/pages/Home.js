import { Profile } from "../components/profile";
import { Add } from "../components/Add";
import { Post } from "../components/Post";
export const Home = () => {
  return (
    <div>
      <div className="h-screen bg-mainBg text-white p-5">
        <Profile />
        <Add />
        <Post />
      </div>
    </div>
  );
};
