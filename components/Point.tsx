import { Card, Text, Title} from "@mantine/core";
import { PointModel} from "../lib/point";

export default function Point(props: {point: PointModel}) {
    const point = props.point;
    return <Card>
        <Title order={4}>{point.title}</Title>
        {point.context != undefined && (<Text>{point.context}</Text>)}
    </Card>
 }