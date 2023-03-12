import { ChangeProfile } from "../components/changeProfile";
import { Modal } from "../components/logout/logoutModal";
import { Profile } from "../components/profile";
export const Settings = () => {
  return (
    <div className="">
      <Modal />
      <div className=" h-screen bg-mainBg text-white px-3">
        <Profile />
        <ChangeProfile />
      </div>
    </div>
  );
};
