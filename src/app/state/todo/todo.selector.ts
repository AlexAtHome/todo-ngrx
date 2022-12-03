import { createSelector } from "@ngrx/store";
import { IAppState } from "../app.state";
import { ITodoState } from "./todo.reducer";

export const selectAllTodos = createSelector(
  (state: IAppState) => state.todos,
  (state: ITodoState) => state.todos,
)
