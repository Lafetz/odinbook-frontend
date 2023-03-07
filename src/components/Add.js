export const Add = () => {
  return (
    <div className="m-auto my-4 flex flex-col p-4 max-w-screen-sm rounded-2xl  bg-cardBg">
      <div className="flex gap-4 items-center">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-xl">K</span>
          </div>{" "}
        </div>
        <form className="w-full" id="form">
          <textarea className="textarea textarea-bordered textarea-sm w-full resize-none bg-btnInput"></textarea>
        </form>
      </div>
      <div className="flex justify-end ">
        <button class="btn btn-sm">Post</button>
      </div>
    </div>
  );
};
