import { combineReducers } from "redux";
import { markdownReducer } from "./markdownReducer";

export const rootReducer = combineReducers({
    markdown: markdownReducer
})

export type RootState = ReturnType<typeof rootReducer>