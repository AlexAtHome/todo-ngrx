import { createAction, props } from "@ngrx/store";
import { ITodo } from "src/app/model/todo.model";

export const ADD_TASK = createAction('[Todo List] Add Task', props<Pick<ITodo, 'content'>>())

export const REMOVE_TASK = createAction('[Todo List] Remove Task', props<Pick<ITodo, 'id'>>())
