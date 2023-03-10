import { Profile } from "../components/profile";
import { useEffect, useState } from "react";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
import { Friend } from "../components/friends/friend";
import { FriendRequest } from "../components/friends/friendRequest";
import { PeopleList } from "../components/people/PeopleList";

export const Friends = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {}, [user]);
  return (
    <div>
      <div className="h-screen  bg-mainBg text-white px-5">
        <Profile />

        <div className="divider m-10">Friend Requests</div>

        {Object.keys(user).length > 0 &&
          user.friendRequest.map((request, i) => {
            return <FriendRequest key={request + i} id={request} />;
          })}
        <div className="divider m-10">Friends</div>

        {Object.keys(user).length > 0 &&
          user.friendList.map((request, i) => {
            return <Friend key={request + i} id={request} />;
          })}
        <div className="divider m-10">People</div>
        <PeopleList />
      </div>
    </div>
  );
};
