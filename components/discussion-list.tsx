import { List } from "@mantine/core";
import { DiscussionModel } from "../lib/discussion";
import Discussion from "./discussion";

export default function DiscussionList(props: { discussions: DiscussionModel[] }) {
    const discussions = props.discussions;
    return <List>
        {discussions.map((discussion) => (
            <List.Item key={discussion.id}><Discussion discussion={discussion}></Discussion></List.Item>
        ))}
    </List>
}