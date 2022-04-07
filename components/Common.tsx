import { Badge } from "@mantine/core";
import { Priority, PriorityColorsMap } from "../lib/common";

export default function PriorityBadge(props: { priority: Priority}) {  
    return (
      <Badge title="Priority" color={PriorityColorsMap[props.priority]}>{props.priority}</Badge>
    )
  }