import { IconDots } from '@tabler/icons';
import { TextInput, Button, ActionIcon, Textarea, Box, Title, Center } from '@mantine/core';
import { useRouter } from 'next/router';
import { useForm, UseFormSetValue } from 'react-hook-form';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { object, optional, string, array, size, Infer } from 'superstruct';
import { useState } from 'react';
import { DiscussionModel, useDiscussionStore } from '../lib/discussion';

const Discussion = object({
    id: optional(string()),
    title: size(string(), 5, 30),
    context: optional(size(string(), 10, 500)),
    questions: optional(array(size(string(), 5, 30)))
});

type Discussion = Infer<typeof Discussion>

function initForm(setValue: UseFormSetValue<Discussion>, discussion?: DiscussionModel) {
    if (!discussion) {
        return
    }
    setValue("id", discussion.id);
    setValue("title", discussion.title);
    setValue("context", discussion.context);
}

export default function DiscussionForm(props: {
    handleFormSubmit: (form) => Promise<void>,
    action: "Create" | "Update",
    discussion?: DiscussionModel
}): JSX.Element {

    const { register, setValue, formState: { errors }, handleSubmit } = useForm<Discussion>({
        resolver: superstructResolver(Discussion),
    });
    const [toggleDiscussionContext, setToggleDiscussionContext] = useState(props.discussion?.context || false);

    initForm(setValue, props.discussion);

    return (
        <Center>
            <Box style={{ width: "80%" }} mx="auto">
                <Center><Title order={2}>{props.action} Discussion</Title></Center>
                <form onSubmit={handleSubmit<Discussion>(props.handleFormSubmit)}>
                    <TextInput {...register('title')} placeholder="What do you want to discuss?"
                        label="Title" rightSection={
                            <ActionIcon variant="filled" color="blue"
                                onClick={() => setToggleDiscussionContext(!toggleDiscussionContext)}>
                                <IconDots size={14} />
                            </ActionIcon>
                        } error={errors.title?.message} />
                    {toggleDiscussionContext && (
                        <Textarea
                            placeholder="Add more details about the discussion"
                            label="Context"
                            {...register('context')}
                            error={errors.context?.message}
                        />
                    )}
                    <Center><Button type="submit" style={{ marginTop: 20 }}>{props.action}</Button></Center>
                </form>
            </Box>
        </Center>
    );

}