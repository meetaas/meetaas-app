import { Group, Title } from "@mantine/core";
import { PointModel } from "../lib/point";
import PriorityBadge from "./Common";


export function PointTitle(props: { point: PointModel; }) {
    const point = props.point;
    return (
        <Group>
            <Title title="Title" order={4}>{point.title}</Title>
            <PriorityBadge priority={point.priority} />
        </Group>
    );
}
