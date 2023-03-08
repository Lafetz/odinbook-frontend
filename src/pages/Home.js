import { Profile } from "../components/profile";
import { Add } from "../components/Add";

export const Home = () => {
  return (
    <div>
      <div className="h-screen bg-mainBg text-white px-5">
        <Profile />
        <Add />
      </div>
    </div>
  );
};
