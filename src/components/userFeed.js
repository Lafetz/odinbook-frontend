import { useEffect, useState } from "react";

export const Userfeed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://odinbook-backend-c0h2.onrender.com/user/owner", {
      method: "GET",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((posts) => {});
      } else if (res.status === 401) {
        //go to login
      } else {
        //idk
      }
    });
  }, []);

  return <div className="flex flex-col justify-between"></div>;
};
