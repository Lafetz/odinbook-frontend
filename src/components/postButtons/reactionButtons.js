import { LikeBtn } from "./likeBtn";

export const ReactionBtns = ({ post }) => {
  //w-full justify-between
  return (
    <div className="flex my-2 gap-1 ">
      <LikeBtn post={post} />

      <button className="btn btn-xs">Comment</button>
      <button className="btn btn-xs">Share</button>
    </div>
  );
};
