import { Profile } from "../components/profile";
import { useEffect } from "react";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
import { Friend } from "../components/friends/friend";
import { FriendRequest } from "../components/friends/friendRequest";
export const Friends = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <div className="h-screen  bg-mainBg text-white px-5">
        <Profile />
        {Object.keys(user).length > 0 &&
          user.friendRequest.map((request, i) => {
            return <FriendRequest key={request + i} id={request} />;
          })}
        {Object.keys(user).length > 0 &&
          user.friendList.map((request, i) => {
            return <Friend key={request + i} id={request} />;
          })}
      </div>
    </div>
  );
};
