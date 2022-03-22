import { z } from 'zod';
import { formList, useForm, zodResolver } from '@mantine/form';
import { IconTrash, IconPlus } from '@tabler/icons';
import { TextInput, Text, Button, Box, Group, ActionIcon, InputWrapper } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useMeetingStore } from '../../lib/meeting';
import { useRouter } from 'next/router';
import { TodoZod } from '../../lib/todo';

const schema = z.object({
  title: z.string().min(5, { message: 'Title should have at least 5 letters' }),
  time: z.date().optional(),
  todos: z.array(TodoZod),
});

export default function CreateMeeting() {
  const router = useRouter();
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: '',
      time: undefined,
      todos: formList([{ title: "" }])
    },
  });

  const todos = form.values.todos.map((_, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="Let's do this"
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps('todos', index, 'title')}
      />
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => form.removeListItem('todos', index)}
      >
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  const addMeeting = useMeetingStore(state => state.addMeeting)

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <Group position="center" mt="xl">
        <h2>Create New Meeting</h2>
      </Group>
      <form onSubmit={form.onSubmit((values) => {
        addMeeting({ title: values.title, time: values.time, todos: values.todos });
        router.push("/meeting");
      })}>
        <TextInput
          required
          label="Title"
          placeholder="Meeting title"
          mt="sm"
          {...form.getInputProps('title')}
        />
        <DatePicker
          label="Time"
          placeholder="Meeting Time"
          mt="sm"
          {...form.getInputProps('time')}
        />
        <Group mb="xs" style={{ marginTop: 20 }}>
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Todos
          </Text>
          <ActionIcon
            color="green"
            variant="hover"
            onClick={() => form.addListItem('todos', { title: '' })}
          >
            <IconPlus size={16} />
          </ActionIcon>
        </Group>

        {todos}

        <Group position="right" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box >
  );
}