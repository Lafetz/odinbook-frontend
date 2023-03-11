import { LikeBtn } from "./likeBtn";

export const ReactionBtns = ({ post, setShow, show }) => {
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
        className="w-full hover:bg-sideC py-1 rounded-xl bg-mainBg"
      >
        comment
      </button>
    </div>
  );
};
