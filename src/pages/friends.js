import { Profile } from "../components/profile";
import { useEffect } from "react";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
import { Friend } from "../components/friends/friend";
import { FriendRequest } from "../components/friends/friendRequest";
export const Friends = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div className="h-screen  bg-mainBg text-white px-5">
        <Profile />
        {Object.keys(user).length > 0 &&
          user.friendRequest.map((request) => {
            console.log(request);
            return <FriendRequest id={request} />;
          })}
      </div>
    </div>
  );
};
