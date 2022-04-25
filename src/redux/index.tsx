import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";
import { postlReducer } from "./ducks/comment/reducer";

const rootReducer = combineReducers({
  post: postlReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
