import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { useDiscussionStore, DiscussionContext, DiscussionErrors, DiscussionError } from "../lib/discussion";
import DefaultErrorFallback from "./DefaultErrorFallback";
import DiscussionErrorFallback from "./DiscussionErrorFallback";
import PageTitle from "./PageTitle";

export default function DiscussionContextProvider(props: PropsWithChildren<{ page?: string
}>) {
    try {
        const router = useRouter();
        const { discussionId } = router.query

        if (!discussionId) {
            throw new DiscussionError(DiscussionErrors.ID_REQUIRED);
        }
        const { getDiscussion } = useDiscussionStore(store => ({
            getDiscussion: store.getDiscussion
        }));
        const discussion = getDiscussion(discussionId as string);

        if (!discussion) {
            throw new DiscussionError(DiscussionErrors.NOT_FOUND);

        }
        return (
            <DiscussionContext.Provider value={{ discussion, page: props.page || ""}}>
                <PageTitle title={discussion.title} />
                {props.children}
            </DiscussionContext.Provider>
        )
    } catch (error) {
        if (error instanceof DiscussionError) {
            return <DiscussionErrorFallback error={error} />
        }
        return <DefaultErrorFallback />
    }
}