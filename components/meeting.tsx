import { Container, Text } from "@mantine/core";
import { MeetingModel } from "../lib/meeting";
import TodoList from "./todo-list";

export default function Meeting(props: { meeting: MeetingModel }) {
    const meeting = props.meeting;
    console.log(meeting);
    return <Container>
        <Text>{meeting.title}</Text>
        {meeting.todos && <TodoList todos={meeting.todos} />}
    </Container>
}