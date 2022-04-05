import { useRouter } from "next/router";
import { ActionIcon, Button, Group, Modal } from "@mantine/core";
import { IconEye, IconPencil, IconPlayerPlay, IconTrash } from "@tabler/icons";
import { DiscussionModel, useDiscussionStore } from "../lib/discussion";
import { useState } from "react";

export default function DiscussionActions(props: {
    discussion: DiscussionModel,
    page?: string
}) {
    const [removeModalOpened, setRemoveModalOpened] = useState(false);
    const router = useRouter();
    const removeDiscussion = useDiscussionStore(store => store.removeDiscussion);
    const shouldShowView = props.page !== "view";
    const shouldShowStart = props.page !== "start";

    const discussion = props.discussion;
    return (
        <>
            <Modal
                opened={removeModalOpened}
                onClose={() => setRemoveModalOpened(false)}
                title="Do you want to remove the discussion?"
            >
                <Group position="center">
                    <Button onClick={() => setRemoveModalOpened(false)}>Cancel</Button>
                    <Button color="red" onClick={() => {
                        removeDiscussion(discussion.id);
                        router.push("/discussion");
                    }}>Remove</Button>
                </Group>
            </Modal>
            <Group position="right">
                {shouldShowView &&
                    <ActionIcon
                        color="blue"
                        variant="hover"
                        onClick={() => router.push(`/discussion/${discussion.id}`)}
                    >
                        <IconEye size={16} />
                    </ActionIcon>
                }
                {shouldShowStart &&
                    <ActionIcon
                        color="blue"
                        variant="hover"
                        onClick={() => router.push(`/discussion/${discussion.id}/start`)}
                    >
                        <IconPlayerPlay size={16} />
                    </ActionIcon>
                }
                <ActionIcon
                    color="blue"
                    variant="hover"
                    onClick={() => router.push(`/discussion/${discussion.id}/edit`)}
                >
                    <IconPencil size={16} />
                </ActionIcon>
                <ActionIcon
                    color="red"
                    variant="hover"
                    onClick={() => {
                        setRemoveModalOpened(true);
                    }}>
                    <IconTrash size={16} />
                </ActionIcon>
            </Group>
        </>
    )
}
