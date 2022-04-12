import {
    closestCenter, DndContext,
    PointerSensor, useSensor, useSensors
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { ActionIcon, Box, Group, Paper, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useFieldArray } from "react-hook-form";
import { defaultPoint } from "../lib/point";
import PointForm from "./PointForm";

export default function PointsForm() {
    const { fields, remove, swap, insert, append } = useFieldArray({
        name: "points", // unique name for your Field Array
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
        <Paper style={{ margin: 15, padding: 10 }}>
            <Group position="apart">
                <Title order={3}>Points</Title>
                <ActionIcon variant="hover" title="Add Point"
                    color="blue" onClick={() => append(defaultPoint())}>
                    <IconPlus size={16} />
                </ActionIcon>
            </Group>
            <Box title="Points">
                <DndContext modifiers={[restrictToParentElement]}
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={fields.map(field => field.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        {fields.map((field, index) => (
                            <PointForm key={field.id} pointsCount={fields.length} fieldId={field.id} index={index}
                                removeHandler={() => remove(index)}
                                insertHandler={() => insert(index + 1, defaultPoint())} />
                        ))}
                    </SortableContext>
                </DndContext>
            </Box>
        </Paper>
    );
}