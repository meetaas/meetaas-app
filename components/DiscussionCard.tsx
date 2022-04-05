import { Card, Group, ScrollArea, Text, Title } from "@mantine/core";
import { DiscussionModel } from "../lib/discussion";
import DiscussionActions from "./DiscussionActions";
import { DiscussionTitle } from "./DiscussionDetails";

export default function DiscussionCard(props: { discussion: DiscussionModel }) {
    const discussion = props.discussion;
    return (
        <Card shadow="sm" p="sm" style={{ width: 300 }}>
            <Group position="left" >
                <DiscussionTitle discussion={discussion} />
                {discussion.context != undefined && (
                    <ScrollArea style={{ height: 120 }}>
                        <Text>{discussion.context}</Text>
                    </ScrollArea>
                )}
            </Group>
            <DiscussionActions discussion={discussion} />
        </Card>
    );
}