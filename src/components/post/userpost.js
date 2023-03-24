import { formatDistance } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";

export const UserPosts = ({ person }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    fetch(`https://odinbook-backend-c0h2.onrender.com/posts/${person._id}`, {
      method: "Get",
      mode: "cors",
      headers: {
        Authorization: "Bearer " + token.token,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((posts) => {
          setPosts(posts);
        });
      } else if (res.status === 401) {
        //go to login
      } else {
        //idk
      }
    });
  }, [person]);
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <div className=" bg-cardBg my-4 m-auto py-4 max-w-screen-sm px-1 rounded-2xl border-solid flex gap-1">
              <div className="avatar placeholder h-16">
                <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                  <span className="text-sm">x</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <div>
                    <span className="font-semibold ">{post.userId.Name}</span>
                    <div className="font-light text-sm">
                      @{post.userId.username}
                    </div>
                  </div>

                  <div className="font-light text-sm">
                    {formatDistance(new Date(post.timeStamp), new Date())} ago{" "}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {post.content}
                  {post.img && <img src={post.imgUrl} alt="post " />}
                </div>
                <div className="font-light text-xs flex items-center gap-1">
                  {post.likedBy.length > 0 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  )}
                  {post.likedBy.length === 0 && <span></span>}
                  {post.likedBy.length === 1 && (
                    <span>one peson liked this</span>
                  )}
                  {post.likedBy.length > 1 && (
                    <span>{post.likedBy.length} people liked this</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
