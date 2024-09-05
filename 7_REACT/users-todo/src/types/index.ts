// src/store/types.ts

// Define the structure of your state
export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

// Define the structure of your User data
export interface User {
  users: [];
}

// Define action types as constants
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// Define the structure of your actions
interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
}

interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: User;
}

interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  payload: string;
}

// Union type of all action types
export type UserActionTypes =
  | FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction;
