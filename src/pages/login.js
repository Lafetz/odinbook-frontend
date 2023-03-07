import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-mainBg text-white">
      <div className="bg-cardBg p-6 rounded-2xl text-white flex flex-col gap-2">
        <form
          onSubmit={() => {
            console.log("hello world man");
          }}
        >
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              id="email"
              type="text"
              placeholder="email"
              className="input input-bordered bg-btnInput"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              id="password"
              className="input input-bordered bg-btnInput"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Login</button>
          </div>
        </form>
        <span href="#" className="">
          Don't have an account?{" "}
          <Link className="hover:underline" to="/signup">
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};
