import { Box, Paper, SimpleGrid, Title } from "@mantine/core";
import { isEmpty } from 'rambda';
import { PointModel } from "../lib/point";
import { PointCard } from "./Point";

export default function PointsGrid(props: { points: PointModel[] }) {
    const points = props.points;
    if (isEmpty(points)) {
        return <></>;
    }
    return (
        <Paper style={{ margin: "10px 0", padding: 5 }}>
            <Box style={{ margin: 5 }}>
                <Title order={2}>Points</Title>
                <SimpleGrid cols={3}>
                    {points.map((point) => (
                        <PointCard key={point.id} point={point} ></PointCard>
                    ))}
                </SimpleGrid>
            </Box>
        </Paper>
    );
}
