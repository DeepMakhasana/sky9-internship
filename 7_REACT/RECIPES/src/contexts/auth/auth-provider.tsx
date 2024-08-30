import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { AuthContext } from "./auth-context.tsx";
import { ActionMapType, AuthStateType, AuthUserType } from "./type.ts";
import { getLocalStorage, isValidToken, setLocalStorage } from "./utils.tsx";
import { Axios } from "../../utils/axios.ts";
import { endpoints } from "../../utils/config.ts";

enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

const STORAGE_KEY = "accessToken";

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = getLocalStorage(STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setLocalStorage(STORAGE_KEY, accessToken);

        const res = await Axios.get(endpoints.auth.me, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const user = res?.data;

        dispatch({
          type: Types.INITIAL,
          payload: {
            user: {
              ...user,
            },
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: null,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async (username: string, password: string) => {
    const data = {
      username,
      password,
    };

    const res = await Axios.post(endpoints.auth.login, data);

    const userData = res?.data;

    setLocalStorage(STORAGE_KEY, userData.token);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user: {
          ...userData,
        },
      },
    });
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    setLocalStorage(STORAGE_KEY, "");
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";
  const status = state.loading ? "loading" : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === "loading",
      authenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",
      //
      login,
      logout,
      getUserData: initialize,
    }),
    [login, logout, state.user, status, initialize]
  );
  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
