import { IToDoListData } from "../utils/interface";

export interface ToDoListState {
  tasksToDo: Array<IToDoListData>;
}

const initialState: ToDoListState = {
  tasksToDo: [],
};

export const toDoListReducer = (
  state = initialState,
  action: {
    type: string,
    payload: IToDoListData | Array<IToDoListData>,
  }
): ToDoListState => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      const taskToAdd = action.payload as IToDoListData;
      return {...state, tasksToDo: [...state.tasksToDo, taskToAdd]};
    case "SET_ALL_THE_FETCHED_TASK_IN_STATE":
      const allTasks = action.payload as Array<IToDoListData>;
      return {...state, tasksToDo: allTasks};
    case "CLEAR_ALL_TASKS":
      return {...state, tasksToDo: []};
    default:
      return state;
  }
};