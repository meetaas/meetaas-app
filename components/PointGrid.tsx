import { SimpleGrid } from "@mantine/core";
import { isEmpty } from 'rambda';
import { PointModel } from "../lib/point";
import Point from "./Point";

export default function PointGrid(props: { points: PointModel[] }) {
    const points = props.points;
    if (isEmpty(points)) {
        return <></>;
    }
    return (
        <SimpleGrid cols={3}>
            {points.map((point) => (
                <Point key={point.id} point={point}></Point>
            ))}
        </SimpleGrid>
    )
}
