import { useContext } from "react";
import { AuthContext } from "./auth-context.tsx";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
