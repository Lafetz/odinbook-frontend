import { Profile } from "../components/profile";
import { Add } from "../components/Add";
import { Posts } from "../components/posts";
import { Modal } from "../components/logout/logoutModal";

export const Home = () => {
  return (
    <div>
      <Modal />
      <div className="h-screen bg-mainBg text-white px-5">
        <Profile />
        <Add />
        <Posts />
      </div>
    </div>
  );
};
