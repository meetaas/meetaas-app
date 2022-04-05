import { DiscussionContext, DiscussionModel } from '../lib/discussion';
import { Box, Title, Group, Paper } from '@mantine/core';
import DiscussionActions from './DiscussionActions';
import { useContext } from 'react';
import PointList from './PointGrid';
import PriorityBadge from './PriorityBadge';

export function DiscussionTitle(props: { discussion: DiscussionModel }) {
  return (<Group>
    <Title>{props.discussion.title}</Title>
    <PriorityBadge priority={props.discussion.priority} />
  </Group>);
}

export function DiscussionHeader() {
  const { discussion, page } = useContext(DiscussionContext)
  return (
    <Group position="apart">
      <DiscussionTitle discussion={discussion} />
      <DiscussionActions discussion={discussion} page={page} />
    </Group>
  );
}
export function DiscussionDetails(): JSX.Element {
  const { discussion } = useContext(DiscussionContext)

  return (
    <Box>
      <DiscussionHeader />
      {!!discussion.context && <Paper style={{ marginBottom: 10, padding: 10 }}>
        {discussion.context}
      </Paper>}
      <PointList points={discussion.points} />
    </Box>
  );
}