import { Card, Group, Text, Title } from "@mantine/core";
import { PointModel } from "../lib/point";
import PointActions from "./PointActions";
import { Priority, PriorityColorsMap } from "../lib/common";
import PriorityBadge from "./Common";

export function PointTitle(props: { point: PointModel }) {
    const point = props.point;
    return (
        <Group>
            <Title order={4}>{point.title}</Title>
            <PriorityBadge priority={point.priority} />
        </Group>
    );
}

export function PointCard(props: { point: PointModel }) {
    const point = props.point;
    return (<Card>
        <Group position="apart">
            <PointTitle point={point} />
            <PointActions point={point} />
        </Group>
        {point.context != undefined && (<Text>{point.context}</Text>)}
    </Card>);
}