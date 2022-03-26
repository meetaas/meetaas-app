import { ActionIcon, Card, Group, Text, Title } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";
import { useRouter } from "next/router";
import { DiscussionModel, useDiscussionStore } from "../lib/discussion";
import QuestionList from "./question-list";

export default function Discussion(props: { discussion: DiscussionModel }) {
    const router = useRouter();
    const removeDiscussion = useDiscussionStore(store => store.removeDiscussion);
    const discussion = props.discussion;
    return (
        <Card shadow="sm" p="sm" style={{ width: 300 }}>
            <Group position="left" >
                <Title>{discussion.title}</Title>
                {discussion.context != undefined && (
                    <Text>{discussion.context}</Text>
                )}
            </Group>

            <Group position="right">
                <ActionIcon
                    color="blue"
                    variant="hover"
                    onClick={() => router.push(`discussion/edit/${discussion.id}`)}
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