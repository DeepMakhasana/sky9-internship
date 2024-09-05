// src/store/reducers/index.ts
import { UserState } from "@/types";
import { combineReducers } from "redux";
import { userReducer } from "./user";

export interface AppState {
  user: UserState;
}

export const rootReducer = combineReducers<any>({
  user: userReducer,
});
