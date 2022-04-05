import { Card, Group, Text, Title } from "@mantine/core";
import { PointModel } from "../lib/point";
import PriorityBadge from "./PriorityBadge";


export function PointTitle(props: { point: PointModel }) {
    const point = props.point;
    return (
        <Group>
            <Title order={4}>{point.title}</Title>
            <PriorityBadge priority={point.priority} />
        </Group>
    );
}

export default function Point(props: { point: PointModel }) {
    const point = props.point;
    return <Card>
        <PointTitle point={point} />
        {point.context != undefined && (<Text>{point.context}</Text>)}
    </Card>
}