import { useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
import { useDiscussionStore, DiscussionContext, DiscussionErrors, DiscussionError } from "../lib/discussion";
import DefaultErrorFallback from "./DefaultErrorFallback";
import DiscussionErrorFallback from "./DiscussionErrorFallback";
import PageTitle from "./PageTitle";

export default function DiscussionContextProvider(props: PropsWithChildren<{
    page?: string
}>) {
    try {
        const router = useRouter();
        const { discussionId } = router.query

        if (!discussionId) {
            throw new DiscussionError(DiscussionErrors.ID_REQUIRED);
        }
        const { getDiscussion, updateDiscussion } = useDiscussionStore(store => ({
            getDiscussion: store.getDiscussion,
            updateDiscussion: store.updateDiscussion,
        }));
        const discussionFromStore = getDiscussion(discussionId as string);

        if (!discussionFromStore) {
            throw new DiscussionError(DiscussionErrors.NOT_FOUND);
        }
        const [discussionContext, setDisucssionContext] = useState({
            discussion: discussionFromStore, page: props.page || ""
        });
        const updateContext = (discussion) => {
            updateDiscussion(discussion);
            setDisucssionContext(state => ({
                discussion: discussion,
                page: discussionContext.page
            }))
        };
        return (
            <DiscussionContext.Provider value={{
                context: discussionContext,
                updateContext
            }} >
                <PageTitle title={discussionContext.discussion.title} />
                {props.children}
            </ DiscussionContext.Provider>
        )
    } catch (error) {
        if (error instanceof DiscussionError) {
            return <DiscussionErrorFallback error={error} />
        }
        return <DefaultErrorFallback />
    }
}