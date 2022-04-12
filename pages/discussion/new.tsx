import { useRouter } from 'next/router';
import { defaultDiscussion, DiscussionContext, useDiscussionStore } from '../../lib/discussion';
import DiscussionForm from '../../components/DiscussionForm';
import { PageType } from '../../lib/common';

export default function CreateDiscussion(): JSX.Element {
  const router = useRouter();
  const addDiscussion = useDiscussionStore(store => store.addDiscussion);
  const handleFormSubmit = async (form) =>  {
    addDiscussion(form);
    router.push("/discussion");
  }
  return (
    <DiscussionContext.Provider value={{ context: { discussion: defaultDiscussion(), page: PageType.NewPage} }}>
      <DiscussionForm handleFormSubmit={handleFormSubmit} action="Create" />
    </DiscussionContext.Provider>
  );
}