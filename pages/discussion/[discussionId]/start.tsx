import { Box } from '@mantine/core';
import DiscussionContextProvider from '../../../components/DiscussionContextProvider';
import { DiscussionDetails } from '../../../components/DiscussionDetails';
import { PageType } from '../../../lib/common';

function DiscussionStartPageContent(): JSX.Element {
    return (
        <Box title="Dicussion Start Page">
            <DiscussionDetails />
        </Box>
    );
}

export default function DiscussionStartPage(): JSX.Element {
    return (
        <DiscussionContextProvider page={PageType.StartPage}>
            <DiscussionStartPageContent />
        </DiscussionContextProvider>
    );
}