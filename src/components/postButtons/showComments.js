import { Comment } from "./comment";
export const Comments = ({ comments }) => {
  return (
    <div className="flex flex-col gap-2">
      {comments.map((comment) => {
        <Comment key={comment._id} comment={comment} />;
      })}
    </div>
  );
};
