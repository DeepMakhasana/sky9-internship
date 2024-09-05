import { AppState } from "@/redux/reducers";
import { FETCH_USER_REQUEST } from "@/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    dispatch({ type: FETCH_USER_REQUEST });
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("user: ", user);
  return (
    <div className="py-2">
      <ul className="pl-4">
        {user?.users.map((user: any) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
