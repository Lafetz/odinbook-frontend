import { Modal } from "../components/logout/logoutModal";
import { Profile } from "../components/profile";
import { PeopleList } from "../components/people/PeopleList";
export const FindPeople = () => {
  return (
    <div className="pb-5 min-h-screen bg-mainBg text-white px-3">
      <Modal />
      <Profile />
      <PeopleList />
    </div>
  );
};
