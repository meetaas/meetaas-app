import { Box, SimpleGrid, Title } from "@mantine/core";
import { isEmpty } from 'rambda';
import { PointModel } from "../lib/point";
import Point from "./Point";

export default function PointGrid(props: { points: PointModel[] }) {
    const points = props.points;
    if (isEmpty(points)) {
        return <></>;
    }
    return (
        <Box>
            <Title order={2}>Points</Title>
            <SimpleGrid cols={3}>
                {points.map((point) => (
                    <Point key={point.id} point={point}></Point>
                ))}
            </SimpleGrid>
        </Box>
    )
}
