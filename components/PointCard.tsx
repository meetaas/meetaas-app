import { Card, Group, Paper, Text } from "@mantine/core";
import { useContext } from "react";
import { PageType } from "../lib/common";
import { DiscussionContext } from "../lib/discussion";
import { PointModel } from "../lib/point";
import PointActions from "./PointActions";
import { PointTitle } from "./PointTitle";
import SubpointsForm from "./SubpointsForm";
import SubpointsList from "./SubpointsList";


export function PointCard(props: { point: PointModel }) {
    const point = props.point;
    const { context: { page } } = useContext(DiscussionContext);

    return (<Card title="Point">
        <Group position="apart">
            <PointTitle point={point} />
            <PointActions point={point} />
        </Group>
        {point.context != undefined && (<Paper title="Context" style={{ padding: 5 }}><Text>{point.context}</Text></Paper>)}
        {page === PageType.StartPage ? <SubpointsForm point={point} /> : <SubpointsList point={point}/>}
    </Card>);
}
