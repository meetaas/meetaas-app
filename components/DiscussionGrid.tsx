import { Grid } from "@mantine/core";
import { DiscussionModel } from "../lib/discussion";
import DiscussionCard from "./DiscussionCard";

export default function DiscussionGrid(props: { discussions: DiscussionModel[] }) {
    const discussions = props.discussions;
    return (
        <Grid style={{marginTop: 10}}>
            {discussions.map((discussion) => (
                <Grid.Col key={discussion.id} span={4} style={{ maxHeight: 250 }}>
                    <DiscussionCard discussion={discussion}></DiscussionCard>
                </Grid.Col>
            ))}
        </Grid>
    );
}