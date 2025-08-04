"use client";

import { createContext, Dispatch } from "react";
import { AuthState, AuthAction } from "@/lib/types/auth";

const AuthContext = createContext<
  | {
      state: AuthState;
      dispatch: Dispatch<AuthAction>;
    }
  | undefined
>(undefined);

export default AuthContext;
