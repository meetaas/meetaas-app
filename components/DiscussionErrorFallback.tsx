import { Button, Center, Group, SimpleGrid, Title } from "@mantine/core"
import Link from "next/link";
import { DiscussionError } from "../lib/discussion";

export default function DiscussionErrorFallback(props: { error: DiscussionError }) {
    return (
        <Center>
            <SimpleGrid cols={1}>
                <Title order={3}>{props.error.message}</Title>
                <Group>
                    <Link href="/discussion"><Button>All Dsicussions</Button></Link>
                    <Link href="/discussion/new">
                        <Button>
                            Create Dsicussion
                        </Button>
                    </Link>
                </Group>
            </SimpleGrid>
        </Center >
    );
}
