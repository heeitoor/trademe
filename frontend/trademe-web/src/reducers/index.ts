import { combineReducers } from "redux";
import { ProfileReducer } from "./profile";

export const Reducers = combineReducers({ profileState: ProfileReducer });
