import { Box } from '@mantine/core';
import DiscussionContextProvider from '../../../components/DiscussionContextProvider';
import { DiscussionDetails } from '../../../components/DiscussionDetails';
import { PageType } from '../../../lib/common';

function DiscussionDetailsPageContent(): JSX.Element {
    return (
        <Box title="Dicussion Details">
            <DiscussionDetails />
        </Box>
    );
}

export default function DiscussionDetailsPage(): JSX.Element {
    return (
        <DiscussionContextProvider page={PageType.ViewPage}>
            <DiscussionDetailsPageContent />
        </DiscussionContextProvider>
    );
}