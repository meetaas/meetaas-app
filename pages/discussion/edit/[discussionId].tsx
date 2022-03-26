import { useRouter } from 'next/router';
import { useDiscussionStore } from '../../../lib/discussion';
import DiscussionForm from '../../../components/discussion-form';

export default function UpdateDiscussion(): JSX.Element {
  const router = useRouter();
  const { discussionId } = router.query
  const { getDiscussion, updateDiscussion } = useDiscussionStore(store => ({
    getDiscussion: store.getDiscussion,
    updateDiscussion: store.updateDiscussion
  }));
  const handleFormSubmit = async (form) => {
    updateDiscussion(form);
    router.push("/discussion");
  }
  const discussion = getDiscussion(discussionId as string);

  return (
    <DiscussionForm handleFormSubmit={handleFormSubmit}
      action="Update" discussion={discussion} />
  );
}