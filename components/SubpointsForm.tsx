import {
    closestCenter, DndContext,
    PointerSensor, useSensor, useSensors
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { superstructResolver } from "@hookform/resolvers/superstruct";
import { Paper, Group, Title, ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { DiscussionContext } from "../lib/discussion";
import { defaultSubpoint, isValidPoint, PointModel, SubpointsFormModel } from "../lib/point";
import SubpointForm from "./SubpointForm";

export default function SubpointsForm(props: { point: PointModel }) {
    const formMethods = useForm<SubpointsFormModel>({
        mode: "onTouched",
        resolver: superstructResolver(SubpointsFormModel),
        defaultValues: { subpoints: props.point.subpoints || [defaultSubpoint()] }
    });

    const { fields, remove, swap, insert, append } = useFieldArray({
        control: formMethods.control,
        name: "subpoints", // unique name for your Field Array
    });
    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: { y: 5 },
        }
    }));
    const handleDragEnd = ({ active, over }) => {
        if (active.id !== over.id) {
            const oldIndex = fields.findIndex(item => item.id === active.id)
            const newIndex = fields.findIndex(item => item.id === over.id)
            swap(oldIndex, newIndex);
        }
    }

    return (
        <Paper title="Subpoints" style={{ marginTop: 10, padding: 10 }}>
            <Group position="apart">
                <Title order={6}>Subpoints</Title>
                <ActionIcon variant="hover" title="Add Point"
                    color="blue" onClick={() => append(defaultSubpoint())}>
                    <IconPlus size={16} />
                </ActionIcon>
            </Group>
            <DndContext modifiers={[restrictToParentElement]}
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={fields.map(field => field.id)}
                    strategy={verticalListSortingStrategy}
                >
                    <DiscussionContext.Consumer>
                        {({ context: { discussion }, updateContext }) => (
                            <FormProvider {...formMethods} >
                                <form onBlur={
                                    formMethods.handleSubmit<SubpointsFormModel>(({ subpoints }) => {
                                        const validSubpoints = subpoints?.filter(isValidPoint);
                                        if (!validSubpoints || validSubpoints.length == 0) {
                                            return;
                                        }
                                        discussion.points.forEach((point) => {
                                            if (point.id === props.point.id) {
                                                point.subpoints = validSubpoints;
                                            }
                                        });
                                        updateContext(discussion);
                                    })
                                }>
                                    {fields.map((field, index) => (
                                        <SubpointForm key={field.id} pointsCount={fields.length} fieldId={field.id} index={index}
                                            removeHandler={() => remove(index)}
                                            insertHandler={() => insert(index + 1, defaultSubpoint())} />
                                    ))}
                                </form>
                            </FormProvider >
                        )}
                    </DiscussionContext.Consumer>
                </SortableContext>
            </DndContext>
        </Paper>
    );
}