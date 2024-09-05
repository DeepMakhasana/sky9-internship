import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  UserActionTypes,
  UserState,
} from "@/types";

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false };
    case FETCH_USER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
