import { Button, Container, Group, Title } from "@mantine/core"
import { IconPlus } from "@tabler/icons"
import Link from "next/link"
import DiscussionGrid from "../../components/DiscussionGrid"
import { useDiscussionStore } from "../../lib/discussion"

export default function Discussions() {
    const discussions = useDiscussionStore(state => state.discussions)
    return (
        <Container>
            <Group position="apart">
                <Title>Discussions</Title>
                <Link href="/discussion/new">
                    <Button leftIcon={<IconPlus size={14} />}>
                        Add
                    </Button>
                </Link>
            </Group>
            {discussions.length > 0 && <DiscussionGrid discussions={discussions} />}
        </Container>
    );
}