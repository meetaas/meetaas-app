import { List } from "@mantine/core";
import { PointModel } from "../lib/point";
import Point from "./Point";

export default function PointList(props: { points: PointModel[] }) {
    const points = props.points;
    return (
        <List>
            {points.map((point) => (
                <List.Item key={point.id}>
                    <Point point={point}></Point>
                </List.Item>
            ))}
        </List>
    )
}