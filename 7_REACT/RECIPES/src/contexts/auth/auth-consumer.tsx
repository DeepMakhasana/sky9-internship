import React from "react";
import { AuthContext } from "./auth-context.tsx";

const AuthConsumer = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext.Consumer>{() => children}</AuthContext.Consumer>;
};

export default AuthConsumer;
