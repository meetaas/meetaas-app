import { Box } from '@mantine/core';
import { useContext } from 'react';
import DiscussionContextProvider from '../../../components/DiscussionContextProvider';
import DiscussionDetails from '../../../components/DiscussionDetails';
import PageTitle from '../../../components/PageTitle';
import { DiscussionContext } from '../../../lib/discussion';

function DiscussionStartPageContent(): JSX.Element {
    const discussion = useContext(DiscussionContext);
    return (
        <Box title="Dicussion Details">
            <DiscussionDetails discussion={discussion} />
        </Box>
    );
}

export default function DiscussionStartPage(): JSX.Element {
    return (
        <DiscussionContextProvider>
            <DiscussionStartPageContent />
        </DiscussionContextProvider>
    );
}