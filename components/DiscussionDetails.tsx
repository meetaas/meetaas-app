import { DiscussionModel, useDiscussionStore } from '../lib/discussion';
import { Box, Title, Text, Group, ActionIcon } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconPencil, IconPlayerPlay, IconTrash } from '@tabler/icons';

export default function DiscussionDetails(props: { discussion: DiscussionModel }): JSX.Element {
  const router = useRouter();

  const { removeDiscussion } = useDiscussionStore(store => ({
    removeDiscussion: store.removeDiscussion
  }));
  const discussion = props.discussion;
  return (

    <Box>
      <Group position="apart">
        <Title>{discussion.title}</Title>
        <Group>
          <ActionIcon
            title="Start"
            color="blue"
            variant="hover"
            onClick={() => router.push(`/discussion/${discussion.id}/start`)}
          >
            <IconPlayerPlay size={16} />
          </ActionIcon>
          <ActionIcon
            title="Edit"
            color="blue"
            variant="hover"
            onClick={() => router.push(`/discussion/${discussion.id}/edit`)}
          >
            <IconPencil size={16} />
          </ActionIcon>
          <ActionIcon
            color="red"
            title="Remove"
            variant="hover"
            onClick={() => {
              removeDiscussion(discussion.id);
              router.push(`/discussion`);
            }}
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
}