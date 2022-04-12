import { ActionIcon, Card, Grid, Group, TextInput } from "@mantine/core";
import { IconDragDrop, IconPlus, IconTrash } from "@tabler/icons";
import { useFormContext } from "react-hook-form";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getHotkeyHandler } from "@mantine/hooks";
import { SubpointsFormModel } from "../lib/point";

export default function SubpointForm(props: {
    fieldId: string, pointsCount: number, index: number,
    removeHandler, insertHandler
}): JSX.Element {
    const { register, formState: { errors } } = useFormContext<SubpointsFormModel>();

    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform,
        isDragging,
    } = useSortable({ id: props.fieldId })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        margin: 10,
        cursor: isDragging ? "move" : "default",
        opacity: isDragging ? 0.5 : 1,
    }
    const error = errors?.subpoints?.at(props.index);

    return (
        <Card title="Subpoint" style={style}
            ref={setNodeRef}
            {...attributes}
        >
            <Grid >
                <Grid.Col span={8} style={{ margin: "auto" }}>
                    <TextInput size="md" {...register(`subpoints.${props.index}.title`)}
                        placeholder="Add subpoint"
                        title="Subpoint Title"
                        error={error?.title?.message}
                        onKeyDown={getHotkeyHandler([
                            ['Enter', props.insertHandler],
                        ])}
                    />
                </Grid.Col>
                <Grid.Col span={4} style={{ margin: "auto" }}>
                    <Group position="center">
                        <ActionIcon
                            title="Add Subpoint"
                            color="blue"
                            variant="hover"
                            onClick={props.insertHandler}>
                            <IconPlus size={14} />
                        </ActionIcon>
                        <ActionIcon {...listeners} size="md" title="Order Subpoint"
                            variant="filled" color="blue"
                            disabled={props.pointsCount == 1}>
                            <IconDragDrop size={14} />
                        </ActionIcon>

                        <ActionIcon size="md" title="Remove Subpoint"
                            variant="hover" color="red"
                            onClick={props.removeHandler}>
                            <IconTrash size={14} />
                        </ActionIcon>
                    </Group>
                </Grid.Col>
            </Grid>
        </Card>
    );
}
