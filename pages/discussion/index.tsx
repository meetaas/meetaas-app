import { Button, Container } from "@mantine/core"
import { IconPlus } from "@tabler/icons"
import Link from "next/link"
import DiscussionList from "../../components/discussion-list"
import { useDiscussionStore } from "../../lib/discussion"

export default function Discussions() {
    const discussions = useDiscussionStore(state => state.discussions)
    return <Container>
        <h1>Discussions</h1>
        <Link href="/discussion/new">
            <Button leftIcon={<IconPlus size={14} />}>
                Create Discussion
            </Button>
        </Link>
        {discussions.length > 0 && <DiscussionList discussions={discussions} />}
    </Container>
}