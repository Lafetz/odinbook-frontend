import { ReactionBtns } from "../postButtons/reactionButtons";
import { useState } from "react";
import { AddComment } from "../postButtons/addComment";
import { Link } from "react-router-dom";
export const Post = ({ post }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className=" bg-cardBg my-4 m-auto py-4 max-w-screen-sm px-1 rounded-2xl border-solid flex gap-1">
        <div className="avatar placeholder h-16">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-sm">x</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <div className="hover:underline">
              <Link to={`/profile/${post.userId._id}`} state={post.userId}>
                <span className="font-semibold ">{post.userId.Name}</span>
                <div className="font-light text-sm">
                  @{post.userId.username}
                </div>
              </Link>
            </div>

            <div className="font-light text-sm">few minutes </div>
          </div>

          <div>{post.content}</div>
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
            {post.likedBy.length === 1 && <span>one peson liked this</span>}
            {post.likedBy.length > 1 && (
              <span>{post.likedby.length} people liked this</span>
            )}
          </div>
          <ReactionBtns post={post} setShow={setShow} show={show} />
        </div>
      </div>
      {show && <AddComment post={post} />}
    </div>
  );
};
