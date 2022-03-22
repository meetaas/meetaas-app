import { List } from "@mantine/core";
import { MeetingModel } from "../lib/meeting";
import Meeting from "./meeting";

export default function MeetingList(props: { meetings: MeetingModel[] }) {
    const meetings = props.meetings;
    return <List>
        {meetings.map((meeting) => (
            <List.Item key={meeting.id}><Meeting meeting={meeting}></Meeting></List.Item>
        ))}
    </List>
}