import { ActionIcon, Group } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons";
import { DiscussionContext } from "../lib/discussion";
import { PointModel } from "../lib/point";

export default function PointActions(props: { point: PointModel }) {
    const currentPoint = props.point;

    return (
        <DiscussionContext.Consumer>
            {({ context: { discussion }, updateContext }) => (
                <Group>
                    <ActionIcon
                        title="Remove Point"
                        color="red"
                        variant="hover"
                        onClick={() => {
                            discussion.points = discussion.points.filter((point) => point.id !== currentPoint.id);
                            updateContext(discussion);
                        }}>
                        <IconTrash size={16} />
                    </ActionIcon>
                </Group>
            )}
        </DiscussionContext.Consumer>
    )
}

