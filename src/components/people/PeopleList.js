import { useEffect, useState } from "react";
import { Person } from "./person";

export const PeopleList = () => {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    fetch("http://localhost:8080/user", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
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
  }, []);
  return (
    <div className=" my-4 m-auto py-4 max-w-screen-sm rounded-2xl flex flex-col gap-2 ">
      {people &&
        people.map((user) => {
          return <Person key={user._id} person={user} />;
        })}
    </div>
  );
};
