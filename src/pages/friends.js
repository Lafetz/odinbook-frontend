import { Profile } from "../components/profile";
import { useEffect, useState } from "react";
import { UserContext } from "../components/context/userContext";
import { useContext } from "react";
import { Friend } from "../components/friends/friend";
import { FriendRequest } from "../components/friends/friendRequest";
import { PeopleList } from "../components/people/PeopleList";
import { Modal } from "../components/logout/logoutModal";
import { Link } from "react-router-dom";

export const Friends = () => {
  const [owner, setOwner] = useState({});
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetch("http://localhost:8080/user/owner", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((owner) => {
          setOwner(owner);
        });
      } else if (res.status === 401) {
      } else {
        //idk
      }
    });
  }, []);

  useEffect(() => {}, []);
  return (
    <div>
      <Modal />
      <div className="pb-5 min-h-screen bg-mainBg text-white px-5 ">
        <Profile />
        <div className="m-auto w-fit">
          <Link
            to="/people"
            className=" bg-sideC hover:bg-sideD btn mt-5 w-fit "
          >
            Find People
          </Link>
        </div>
        <div className="divider m-10  before:bg-sideC after:bg-sideC ">
          Friend Requests
        </div>
        {Object.keys(owner).length > 0 &&
          owner.friendRequest.map((request, i) => {
            return (
              <FriendRequest
                key={request + i}
                id={request}
                setOwner={setOwner}
              />
            );
          })}
        <div className="divider m-10 before:bg-sideC after:bg-sideC  ">
          Friends
        </div>

        {Object.keys(owner).length > 0 &&
          owner.friendList.map((request, i) => {
            return (
              <Friend key={request + i} id={request} setOwner={setOwner} />
            );
          })}
      </div>
    </div>
  );
};
//  <div className="divider m-10 before:bg-sideC after:bg-sideC ">
//People
//</div> <PeopleList setOwner={setOwner} />
