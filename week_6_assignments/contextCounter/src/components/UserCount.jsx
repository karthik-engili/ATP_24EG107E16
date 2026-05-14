import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserCount() {
  const { count } = useContext(UserContext);

  return (
    <div className="my-4">
      <h2 className="text-3xl font-bold ">Total Users Added: {count}</h2>
    </div>
  );
}

export default UserCount;