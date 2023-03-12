import { FriendRequest } from "../friends/friendRequest";
import { RequestBtns } from "../friends/requestBtns";
import { Person } from "../people/person";

export const Name = ({ user }) => {
  return <Person person={user} />;
};
