export const Comment = ({ comment }) => {
  return (
    <div className="flex">
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
          <span className="text-xs">AA</span>
        </div>
      </div>
      <div>
        <div>
          <div>elon musk</div>
          <div>@spacex</div>
        </div>
        <div>content</div>
      </div>
    </div>
  );
};
