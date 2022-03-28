import { useRouter } from 'next/router';
import { useDiscussionStore } from '../../lib/discussion';
import DiscussionForm from '../../components/DiscussionForm';

export default function CreateDiscussion(): JSX.Element {
  const router = useRouter();
  const addDiscussion = useDiscussionStore(store => store.addDiscussion);
  const handleFormSubmit = async (form) =>  {
    addDiscussion(form);
    router.push("/discussion");
  }
  return (
    <DiscussionForm handleFormSubmit={handleFormSubmit} action="Create" />
  );
}