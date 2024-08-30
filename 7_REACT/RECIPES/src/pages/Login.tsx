import { useContext } from "react";
import { AuthContext } from "../contexts/auth/auth-context.tsx";

const Login = () => {
  const auth = useContext(AuthContext);
  console.log(auth);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => auth.login("emilys", "emilyspass")}>Login</button>
      <button onClick={() => auth.logout()}>Logout</button>
      <button onClick={() => auth.getUserData()}>User Data</button>
    </div>
  );
};

export default Login;
