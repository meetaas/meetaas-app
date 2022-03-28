import { useRouter } from 'next/router';
import { DiscussionContext, useDiscussionStore } from '../../../lib/discussion';

import DiscussionForm from '../../../components/DiscussionForm';
import { Box } from '@mantine/core';
import PageTitle from '../../../components/PageTitle';
import { useContext } from 'react';
import DiscussionContextProvider from '../../../components/DiscussionContextProvider';

export default function DiscussionEditPage(): JSX.Element {
    return (
        <DiscussionContextProvider>
            <DiscussionEditPageContent />
        </DiscussionContextProvider>
    );
}

function DiscussionEditPageContent() {
    const router = useRouter();
    const discussion = useContext(DiscussionContext);
    const { updateDiscussion } = useDiscussionStore(store => ({
        updateDiscussion: store.updateDiscussion
    }));
    const handleFormSubmit = async (form) => {
        updateDiscussion(form);
        router.push("/discussion");
    }
    return (
        <Box title="Edit Discussion">
            <PageTitle title={discussion.title} />
            <DiscussionForm handleFormSubmit={handleFormSubmit}
                action="Update" discussion={discussion} />
        </Box>
    );
}