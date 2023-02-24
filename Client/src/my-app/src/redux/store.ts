import { createStore } from "redux";
import { toDoListReducer } from "./reducer";

export const store = createStore(toDoListReducer);