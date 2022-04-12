import { DiscussionModel } from '../lib/discussion';
import { Title, Group } from '@mantine/core';
import PriorityBadge from './Common';

export default function DiscussionTitle(props: { discussion: DiscussionModel; }) {
  return (<Group title="Title">
    <Title>{props.discussion.title}</Title>
    <PriorityBadge priority={props.discussion.priority} />
  </Group>);
}
