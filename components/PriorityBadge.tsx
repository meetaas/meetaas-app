import { Badge } from "@mantine/core";
import { Priority, PriorityColorsMap } from "../lib/common";

export default function PriorityBadge(props: { priority: Priority}) {
  console.log(PriorityColorsMap[props.priority]);
  
  return (
    <Badge title="Priority" color={PriorityColorsMap[props.priority]}>{props.priority}</Badge>
  )
}