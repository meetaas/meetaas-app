import { DiscussionContext } from '../lib/discussion';
import { Box, Paper } from '@mantine/core';
import PointsGrid from './PointsGrid';
import DiscussionHeader from './DiscussionHeader';

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