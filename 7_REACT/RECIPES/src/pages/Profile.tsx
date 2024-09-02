import { useAuth } from "../contexts/auth/auth-consumer";
import { getLocalStorage } from "../utils/utils";

export const Profile = () => {
  const userProfileData = getLocalStorage("user");
  const { logout } = useAuth();

  return (
    <section className="container mt-4">
      <div style={{ maxWidth: "100px", maxHeight: "100px" }}>
        <img
          src={userProfileData.image}
          alt={userProfileData.username}
          className="img-fluid rounded-circle border border-secondary-subtle"
        />
      </div>
      <div className="mt-4">
        <h5 className="display-6">{`${userProfileData.firstName} ${userProfileData.lastName}`}</h5>
        <p>{userProfileData.email}</p>
      </div>
      <p
        className="text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => logout()}
      >
        Logout
      </p>
    </section>
  );
};
