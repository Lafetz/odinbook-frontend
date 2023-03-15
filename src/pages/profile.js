import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RequestBtns } from "../components/friends/requestBtns";

import { Person } from "../components/people/person";
import { Posts } from "../components/post/posts";
import { Profile } from "../components/profile";
import { Modal } from "../components/logout/logoutModal";
import { UserPosts } from "../components/post/userpost";
export const UserProfile = () => {
  const [posts, setPosts] = useState();
  const location = useLocation();
  const person = location.state;
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetch(`http://localhost:8080/posts/${person._id}`, {
      method: "Get",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((posts) => {
          console.log(posts);
          setPosts(posts);
        });
      } else if (res.status === 401) {
        //go to login
      } else {
        //idk
      }
    });
  }, []);

  return (
    <div className=" h-screen bg-mainBg text-white px-3">
      <Modal />
      <Profile />
      <div className="my-5"></div>
      <Person person={person} />
      <div className="divider m-10 before:bg-sideC after:bg-sideC ">
        User Posts
      </div>
      <UserPosts person={person} />
    </div>
  );
};
