import { nanoid } from "nanoid";
import { z } from 'zod';
import { Priority } from "./common";

export enum TodoStatus {
    NotStarted,
    InProgress,
    Done
}

export interface TodoModel {
    id?: string,
    title: string,
    priority?: Priority,
    status?: TodoStatus,
    subTodos?: TodoModel[]
}

export function createTodo(todo: TodoModel): TodoModel{
    todo.id = nanoid()
    todo.priority = todo.priority || Priority.Low;
    todo.status = todo.status || TodoStatus.NotStarted;
    return todo;
}

export const TodoZod: z.ZodType<TodoModel> = z.lazy(() =>
  z.object({
    title: z.string(),
    subTodos: z.array(TodoZod).optional(),
  })
);