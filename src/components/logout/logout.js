import { useState } from "react";

export const Logout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <label htmlFor="my-modal-4" className="">
        Log out
      </label>
    </>
  );
};
