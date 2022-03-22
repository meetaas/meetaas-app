import { List } from "@mantine/core";
import { TodoModel } from "../lib/todo";
import Todo from "./todo";

export default function TodoList(props: { todos: TodoModel[] }) {
    const todos = props.todos;
    return <List>
        {todos.map((todo) => (
            <List.Item key={todo.id}><Todo todo={todo}></Todo></List.Item>
        ))}
    </List>
}