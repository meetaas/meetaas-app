import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { TextInput, Button, Box, Group, Center } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useMeetingStore } from '../../lib/meeting';
import Meeting from '../../components/meeting';

const schema = z.object({
  title: z.string().min(5, { message: 'Title should have at least 5 letters' }),
  time: z.date().optional(),
});

export default function CreateMeeting() {
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      title: '',
      time: undefined,
    },
  });

  const addMeeting = useMeetingStore(state => state.addMeeting)

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <Group position="center" mt="xl">
        <h2>Create New Meeting</h2>
      </Group>
      <form onSubmit={form.onSubmit((values) => {
        addMeeting({ title: values.title, time: values.time });
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

      <Group position="right" mt="xl">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
    </Box >
  );
}