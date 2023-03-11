import { Profile } from "../components/profile";
import { Add } from "../components/Add";
import { Posts } from "../components/posts";
import { Modal } from "../components/logout/logoutModal";

export const Home = () => {
  return (
    <div className="">
      <Modal />
      <div className="h-screen bg-mainBg text-white px-3">
        <Profile />
        <Add />
        <Posts />
      </div>
    </div>
  );
};
