import { List, Paper, Title } from "@mantine/core";
import { PointModel } from "../lib/point";

export default function SubpointsList(props: { point: PointModel }) {
    if (!props.point.subpoints || props.point.subpoints.length == 0) {
        return <></>
    }
    return (
        <Paper title="Subpoints" style={{ marginTop: 10, padding: 10 }}>
            <Title order={6}>Subpoints</Title>
            <List>
                {props.point.subpoints.map((subpoint, index) => {
                    return (<List.Item key={index}>{subpoint.title}</List.Item>)
                })}
            </List>
        </Paper>
    )
}
