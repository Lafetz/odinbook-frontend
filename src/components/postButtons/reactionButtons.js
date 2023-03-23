import { LikeBtn } from "./likeBtn";
import { Remove } from "./remove";

export const ReactionBtns = ({ post, setShow, show, index }) => {
  const btnClick = () => {
    if (show) {
      setShow(false);
      return;
    }
    setShow(true);
  };
  return (
    <div className="flex my-2 justify-around max-w-xs gap-1">
      <LikeBtn post={post} />
      <button
        onClick={btnClick}
        className="w-full hover:bg-sideC py-1 px-1 rounded-xl bg-btnInput"
      >
        Comment
      </button>
      <Remove index={index} post={post} />
    </div>
  );
};
