import { Button, Container } from "@mantine/core"
import { IconPlus } from "@tabler/icons"
import Link from "next/link"
import MeetingList from "../../components/meeting-list"
import { useMeetingStore } from "../../lib/meeting"

export default function Meetings() {
    const meetings = useMeetingStore(state => state.meetings)
    return <Container>
        <h1>Meetings</h1>
        <Link href="/meeting/new">
            <Button leftIcon={<IconPlus size={14} />}>
                Create Meeting
            </Button>
        </Link>
        {meetings.length > 0 && <MeetingList meetings={meetings} />}
    </Container>
}