import { Box } from '@mantine/core';
import DiscussionContextProvider from '../../../components/DiscussionContextProvider';
import DiscussionDetails from '../../../components/DiscussionDetails';

function DiscussionDetailsPageContent(): JSX.Element {
    return (
        <Box title="Dicussion Details">
            <DiscussionDetails />
        </Box>
    );
}

export default function DiscussionDetailsPage(): JSX.Element {
    return (
        <DiscussionContextProvider page="view">
            <DiscussionDetailsPageContent />
        </DiscussionContextProvider>
    );
}