import { Container, List, Text} from "@mantine/core";
import { TodoModel} from "../lib/todo";
import TodoList from "./todo-list";

export default function Todo(props: {todo: TodoModel}) {
    const todo = props.todo;
    return <Container>
        <Text>{todo.title}</Text>
        {todo.subTodos && <TodoList todos={todo.subTodos} />}
    </Container>
 }