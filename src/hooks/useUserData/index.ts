import AuthContext from "@/context/authContext";
import { User } from "@/lib/types/auth";
import { useCallback, useContext } from "react";

export const useUserData = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { state, dispatch } = context;

  const login = useCallback(
    (user: User) => {
      dispatch({ type: "LOGIN", payload: user });
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, [dispatch]);

  return {
    ...state,
    login,
    logout,
  };
};
