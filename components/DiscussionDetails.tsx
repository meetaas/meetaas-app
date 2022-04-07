import { DiscussionContext, DiscussionModel } from '../lib/discussion';
import { Box, Title, Group, Paper } from '@mantine/core';
import DiscussionActions from './DiscussionActions';
import PointsGrid from './PointsGrid';
import PriorityBadge from './Common';

export function DiscussionTitle(props: { discussion: DiscussionModel }) {
  return (<Group>
    <Title>{props.discussion.title}</Title>
    <PriorityBadge priority={props.discussion.priority} />
  </Group>);
}

export function DiscussionHeader() {
  return (
    <DiscussionContext.Consumer>
      {({ context: { discussion, page } }) => (
        <Group position="apart">
          <DiscussionTitle discussion={discussion} />
          <DiscussionActions discussion={discussion} page={page} />
        </Group>
      )}
    </DiscussionContext.Consumer>
  );
}
export function DiscussionDetails(): JSX.Element {
  return (
    <DiscussionContext.Consumer>
      {({ context: { discussion } }) => (
        <Box>
          <DiscussionHeader />
          {!!discussion.context && <Paper style={{ marginBottom: 10, padding: 10 }}>
            {discussion.context}
          </Paper>}
          <PointsGrid points={discussion.points} />
        </Box>
      )}
    </DiscussionContext.Consumer>
  );
}