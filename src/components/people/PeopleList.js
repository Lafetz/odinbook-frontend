import { useEffect, useState } from "react";
import { PersonState } from "./personState";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
export const PeopleList = () => {
  const { user, setUser } = useContext(UserContext);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (Object.keys(user).length > 0) {
      fetch("http://localhost:8080/user", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.token,
        },
        body: JSON.stringify({ user: user }),
      }).then((res) => {
        if (res.status === 200) {
          res.json().then((users) => {
            setPeople(users);
          });
        } else if (res.status === 401) {
          //go to login
        } else {
          //idk
        }
      });
    }
  }, [user]);

  return (
    <div className=" my-4 m-auto py-4 max-w-screen-sm rounded-2xl flex flex-col gap-2 ">
      {people &&
        people.map((user) => {
          return <PersonState key={user._id} personState={user} />;
        })}
    </div>
  );
};
