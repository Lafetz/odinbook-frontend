import { Profile } from "../components/profile";
import { useEffect } from "react";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
import { Friend } from "../components/friends/friend";
import { FriendRequest } from "../components/friends/friendRequest";
import { PeopleList } from "../components/people/PeopleList";
export const Friends = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      <div className="h-screen  bg-mainBg text-white px-5">
        <Profile />
        <PeopleList />
        <div className="divider mt-10">Friend Requests</div>
        {user && <div className="m-auto w-fit my-10">No requests</div>}
        {Object.keys(user).length > 0 &&
          user.friendRequest.map((request, i) => {
            return <FriendRequest key={request + i} id={request} />;
          })}
        <div className="divider">Friends</div>
        <div className="m-auto w-fit my-10">You don't have any</div>
        {Object.keys(user).length > 0 &&
          user.friendList.map((request, i) => {
            return <Friend key={request + i} id={request} />;
          })}
      </div>
    </div>
  );
};
