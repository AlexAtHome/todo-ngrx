import { createReducer, on } from "@ngrx/store";
import { ITodo } from "src/app/model/todo.model";
import { ADD_TASK, REMOVE_TASK } from "./todo.actions";
import { v4 as uuid } from 'uuid'

export interface ITodoState {
  todos: ITodo[]
  status: 'pending' | 'loading' | 'error' | 'ready'
}

export const initialTodoState: ITodoState = {
  todos: [],
  status: 'pending',
}

export const todoReducer = createReducer(
  initialTodoState,
  on(ADD_TASK, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { content, id: uuid(), createdAt: new Date() }]
  })),
  on(REMOVE_TASK, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  }))
)
