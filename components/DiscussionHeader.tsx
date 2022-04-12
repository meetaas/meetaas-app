import { DiscussionContext } from '../lib/discussion';
import { Group } from '@mantine/core';
import DiscussionActions from './DiscussionActions';
import DiscussionTitle from './DiscussionTitle';


export default function DiscussionHeader() {
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
