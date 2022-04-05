import { DiscussionContext, DiscussionModel } from '../lib/discussion';
import { Box, Title, Group, Paper } from '@mantine/core';
import DiscussionActions from './DiscussionActions';
import { useContext } from 'react';
import PointList from './PointGrid';

export function DiscussionHeader() {
  const { discussion, page } = useContext(DiscussionContext)
  return (
    <Group position="apart">
      <Title>{discussion.title}</Title>
      <DiscussionActions discussion={discussion} page={page} />
    </Group>
  );
}
export default function DiscussionDetails(): JSX.Element {
  const { discussion } = useContext(DiscussionContext)

  return (
    <Box>
      <DiscussionHeader />
      {!!discussion.context && <Paper>{discussion.context}</Paper> }
      <PointList points={discussion.points}/>
    </Box>
  );
}