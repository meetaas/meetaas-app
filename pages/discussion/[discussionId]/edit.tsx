import { useRouter } from 'next/router';
import { useDiscussionStore } from '../../../lib/discussion';
import DiscussionForm from '../../../components/DiscussionForm';
import { Box } from '@mantine/core';
import DiscussionContextProvider from '../../../components/DiscussionContextProvider';

export default function DiscussionEditPage(): JSX.Element {
    return (
        <DiscussionContextProvider page='edit'>
            <DiscussionEditPageContent />
        </DiscussionContextProvider>
    );
}

function DiscussionEditPageContent() {
    const router = useRouter();
    const { updateDiscussion } = useDiscussionStore(store => ({
        updateDiscussion: store.updateDiscussion
    }));
    const handleFormSubmit = async (form) => {
        updateDiscussion(form);
        router.push("/discussion");
    }
    return (
        <Box title="Edit Discussion">
            <DiscussionForm handleFormSubmit={handleFormSubmit} action="Update" />
        </Box>
    );
}