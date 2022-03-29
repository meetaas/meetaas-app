import { DiscussionModel } from '../lib/discussion';
import { Box, Title, Group } from '@mantine/core';
import DiscussionActions from './DiscussionActions';

export function DiscussionHeader(props: { discussion: DiscussionModel }) {
  const discussion = props.discussion;
  return (
    <Group position="apart">
      <Title>{discussion.title}</Title>
      <DiscussionActions discussion={discussion} />
    </Group>
  );
}
export default function DiscussionDetails(props: { discussion: DiscussionModel }): JSX.Element {
  const discussion = props.discussion;

  return (
    <Box>
      <DiscussionHeader discussion={discussion} />
    </Box>
  );
}