import { IToDoListData } from "../utils/interface";

export const addNewTaskAction = (taskToAdd: IToDoListData) => ({
  type: "ADD_NEW_TASK",
  payload: taskToAdd,
});

export const setAllTaskAction = (allFetchedTasks: Array<IToDoListData>) => ({
  type: "SET_ALL_THE_FETCHED_TASK_IN_STATE",
  payload: allFetchedTasks,
});

export const clearAllTaskAction = () => ({
  type: "CLEAR_ALL_TASKS",
});
