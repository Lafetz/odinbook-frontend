import { useLocation } from "react-router-dom";

import { Person } from "../components/people/person";

import { Profile } from "../components/profile";
import { Modal } from "../components/logout/logoutModal";
import { UserPosts } from "../components/post/userpost";
import { useState } from "react";
export const UserProfile = () => {
  const location = useLocation();

  const [person, setPerson] = useState(location.state);

  return (
    <div className="pb-5 min-h-screen bg-mainBg text-white px-3">
      <Modal />
      <Profile />
      <div className="my-5"></div>
      <Person person={person} setPerson={setPerson} />
      <div className="divider m-10 before:bg-sideC after:bg-sideC ">
        User Posts
      </div>
      <UserPosts person={person} />
    </div>
  );
};
