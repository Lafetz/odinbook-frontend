import { ReactionBtns } from "./reactionButtons";
export const Post = () => {
  return (
    <div className=" bg-cardBg my-4 m-auto p-4 max-w-screen-sm rounded-2xl border-solid ">
      <div className="flex flex-col gap-2">
        <div className="  w-full flex justify-between">
          <div>
            <span className="font-semibold text-lg">Elon musk</span>
            <div className="font-semibold text-sm">@spacex</div>
          </div>

          <div className="font-light text-sm">few minutes ago</div>
        </div>

        <div>
          A character can be any letter, number, punctuation, special character,
          or space. Each of these characters takes up one byte of space in a
          computer's memory. Some Unicode characters, like emojis and some
          letters
        </div>
        <div className="font-light text-xs flex items-center gap-1">
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
          144 people liked this
        </div>
        <ReactionBtns />
      </div>
    </div>
  );
};
