import { useRouter } from "next/router";
import { useDiscussionStore, DiscussionContext, DiscussionErrors, DiscussionError } from "../lib/discussion";
import DefaultErrorFallback from "./DefaultErrorFallback";
import DiscussionErrorFallback from "./DiscussionErrorFallback";

export default function DiscussionContextProvider({ children }) {
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
            <DiscussionContext.Provider value={discussion}>
                {children}
            </DiscussionContext.Provider>
        )
    } catch (error) {
        if (error instanceof DiscussionError) {
            return <DiscussionErrorFallback error={error} />
        }
        return <DefaultErrorFallback />
    }
}