import { ActionIcon, Card, Group, ScrollArea, Text, Title } from "@mantine/core";
import { IconMaximize, IconPencil, IconTrash } from "@tabler/icons";
import { useRouter } from "next/router";
import { DiscussionModel, useDiscussionStore } from "../lib/discussion";

export default function DiscussionCard(props: { discussion: DiscussionModel }) {
    const router = useRouter();
    const removeDiscussion = useDiscussionStore(store => store.removeDiscussion);
    const discussion = props.discussion;
    return (
        <Card shadow="sm" p="sm" style={{ width: 280 }}>
            <Group position="left" >
                <Title>{discussion.title}</Title>
                {discussion.context != undefined && (
                    <ScrollArea style={{ height: 120 }}>
                        <Text>{discussion.context}</Text>
                    </ScrollArea>
                )}
            </Group>

            <Group position="right">
                <ActionIcon
                    color="blue"
                    variant="hover"
                    onClick={() => router.push(`discussion/${discussion.id}`)}
                >
                    <IconMaximize size={16} />
                </ActionIcon>
                <ActionIcon
                    color="blue"
                    variant="hover"
                    onClick={() => router.push(`discussion/${discussion.id}/edit`)}
                >
                    <IconPencil size={16} />
                </ActionIcon>
                <ActionIcon
                    color="red"
                    variant="hover"
                    onClick={() => removeDiscussion(discussion.id)}
                >
                    <IconTrash size={16} />
                </ActionIcon>
            </Group>
        </Card>
    );
}