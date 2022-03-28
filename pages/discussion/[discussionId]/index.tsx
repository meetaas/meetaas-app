import { Box } from '@mantine/core';
import { useContext } from 'react';
import DiscussionContextProvider from '../../../components/DiscussionContextProvider';
import DiscussionDetails from '../../../components/DiscussionDetails';
import PageTitle from '../../../components/PageTitle';
import { DiscussionContext } from '../../../lib/discussion';

function DiscussionDetailsPageContent(): JSX.Element {
    const discussion = useContext(DiscussionContext);
    return (
        <Box title="Dicussion Details">
            <PageTitle title={discussion.title} />
            <DiscussionDetails discussion={discussion} />
        </Box>
    );
}

export default function DiscussionDetailsPage(): JSX.Element {
    return (
        <DiscussionContextProvider>
            <DiscussionDetailsPageContent />
        </DiscussionContextProvider>
    );
}