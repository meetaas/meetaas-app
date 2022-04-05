import { IconDots } from '@tabler/icons';
import {isEmpty} from 'rambda';
import { TextInput, Button, ActionIcon, Textarea, Box, Title, Center, Card } from '@mantine/core';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { superstructResolver } from '@hookform/resolvers/superstruct';
import { useContext, useState } from 'react';
import { DiscussionModel, DiscussionFormModel, DiscussionContext } from '../lib/discussion';
import PointsForm from './PointsForm';
import { defaultPoint } from '../lib/point';

function DiscussionFormFields(props: { discussion?: DiscussionModel }) {
    const [toggleContext, setToggleContext] = useState(props.discussion?.context || false);
    const { register, formState: { errors } } = useFormContext<DiscussionFormModel>();
    return (
        <Card title="Discussion" style={{ margin: 10 }}>
            <TextInput {...register('title')} placeholder="What do you want to discuss?"
                title="Disucssion title"
                size="md" rightSection={
                    <ActionIcon variant="filled" color="blue"
                        title="Add Context"
                        onClick={() => setToggleContext(!toggleContext)}>
                        <IconDots size={14} />
                    </ActionIcon>
                } error={errors.title?.message} />
            {
                toggleContext && (
                    <Textarea autosize
                        title="Disucssion Contex"
                        style={{ marginTop: 10 }}
                        placeholder="Add more details about the discussion"
                        {...register('context')}
                        error={errors.context?.message}
                    />
                )
            }
        </Card>
    );
}

export default function DiscussionForm(props: {
    handleFormSubmit: (form) => Promise<void>,
    action: "Create" | "Update",
}): JSX.Element {

    const { discussion } = useContext(DiscussionContext);

    if(isEmpty(discussion.points)) {
        discussion.points = [defaultPoint()];
    }

    const formMethods = useForm<DiscussionFormModel>({
        mode: "onTouched",
        resolver: superstructResolver(DiscussionFormModel),
        defaultValues: discussion
    });

    return (
        <Center>
            <Box style={{ width: "80%" }} mx="auto">
                <Center><Title order={2}>{props.action} Discussion</Title></Center>
                <FormProvider {...formMethods} >
                    <form onSubmit={
                        formMethods.handleSubmit<DiscussionFormModel>(props.handleFormSubmit)
                    }>
                        <DiscussionFormFields discussion={discussion} />
                        <PointsForm />
                        <Center><Button type="submit" style={{ marginTop: 20 }}>{props.action}</Button></Center>
                    </form>
                </FormProvider>
            </Box>
        </Center>
    );

}