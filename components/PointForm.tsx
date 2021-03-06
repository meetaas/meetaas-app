import { ActionIcon, Card, Grid, Group, NativeSelect, Textarea, TextInput } from "@mantine/core";
import { IconDots, IconDragDrop, IconPlus, IconTrash } from "@tabler/icons";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { DiscussionFormModel } from "../lib/discussion";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getHotkeyHandler } from "@mantine/hooks";
import { isValidPoint, PointModel } from "../lib/point";
import { PriorityValuesMap } from "../lib/common"

export default function PointForm(props: {
    fieldId: string, pointsCount: number, index: number,
    removeHandler, insertHandler
}): JSX.Element {
    const { register, formState: { errors }, watch } = useFormContext<DiscussionFormModel>();

    const point = watch(`points.${props.index}`) as PointModel | undefined;
    const [toggleContext, setToggleContext] = useState(point?.context || false);
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
    const error = errors?.points?.at(props.index);

    return (
        <Card title="Point" style={style}
            ref={setNodeRef}
            {...attributes}
        >
            <Grid >
                <Grid.Col span={8} style={{ margin: "auto" }}>
                    <TextInput size="md" {...register(`points.${props.index}.title`)}
                        placeholder="What points do you want to discuss?"
                        title="Point Title"
                        rightSection={
                            <ActionIcon variant="filled" color="blue"
                                title="Add Context" disabled={!isValidPoint(point)}
                                onClick={() => setToggleContext(!toggleContext)}>
                                <IconDots size={14} />
                            </ActionIcon>
                        }
                        error={error?.title?.message}
                        onKeyDown={getHotkeyHandler([
                            ['Enter', props.insertHandler],
                        ])}
                    />
                </Grid.Col>
                <Grid.Col span={2} style={{ margin: "auto" }}>
                    <NativeSelect title="Priority"
                        data={PriorityValuesMap}
                        {...register(`points.${props.index}.priority`)}
                    />
                </Grid.Col>
                <Grid.Col span={2} style={{ margin: "auto" }}>

                    <Group position="center">
                        <ActionIcon variant="hover" title="Add Point"
                            color="blue" onClick={props.insertHandler}>
                            <IconPlus size={14} />
                        </ActionIcon>
                        <ActionIcon {...listeners} size="md" title="Order Point"
                            variant="hover" color="blue"
                            disabled={props.pointsCount == 1}>
                            <IconDragDrop size={14} />
                        </ActionIcon>
                        <ActionIcon size="md" title="Remove Point"
                            variant="hover" color="red"
                            onClick={props.removeHandler}>
                            <IconTrash size={14} />
                        </ActionIcon>
                    </Group>
                </Grid.Col>
            </Grid>

            {toggleContext && (
                <Textarea autosize
                    title="Point Context"
                    style={{ marginTop: 10 }}
                    placeholder="Add more details about the point"
                    {...register(`points.${props.index}.context`)}
                    error={error?.context?.message}
                />
            )}
        </Card>
    );
}
