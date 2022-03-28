import { Container, List, Text} from "@mantine/core";
import { PointModel} from "../lib/point";

export default function Point(props: {point: PointModel}) {
    const point = props.point;
    return <Container>
        <Text>{point.title}</Text>
        {point.context != undefined && (<Text>{point.context}</Text>)}
    </Container>
 }