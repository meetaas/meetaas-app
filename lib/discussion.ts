import { nanoid } from 'nanoid';
import create from 'zustand'
import { Priority } from './common';
import { createQuestion, QuestionModel } from './question';

export enum DiscussionStatus {
  Open,
  InProgress,
  Canceled,
  Concluded,
  Archived
}

export interface DiscussionModel {
    id: string,
    title: string,
    context?: string,
    status?: DiscussionStatus,
    priority?: Priority,
    questions?: QuestionModel[]
}

export function createDiscussion(discussion: DiscussionModel): DiscussionModel{
  discussion.id = discussion.id  || nanoid();
  discussion.priority = discussion.priority || Priority.Low;
  discussion.status = discussion.status ||  DiscussionStatus.Open
   if (discussion.questions) {
    discussion.questions = discussion.questions.map(createQuestion)
   }
  return discussion;
}

export interface DiscussionState {
  discussions: DiscussionModel[];
  getDiscussion: (id: string) => DiscussionModel | undefined;
  addDiscussion: (discussion: DiscussionModel) => void;
  updateDiscussion: (discussion: DiscussionModel) => void;
  removeDiscussion: (id: string) => void;
}

export const useDiscussionStore = create<DiscussionState>((set, get) => ({
  // initial state
  discussions: [],
  getDiscussion: (id: string) => {
    return get().discussions.find((discussion) => discussion.id === id);
  },
  // methods for manipulating state
  addDiscussion: (discussion: DiscussionModel) => {
    set((state) => ({
      discussions: [
        ...state.discussions,
        createDiscussion(discussion)
      ],
    }));
  },
  updateDiscussion: (updated: DiscussionModel) => {
    set((state) => {
      const index = state.discussions.findIndex((discussion) => discussion.id === updated.id );
      state.discussions[index] = createDiscussion(updated);
      return state;
    });
  },
  removeDiscussion: (id) => {
    set((state) => ({
      discussions: state.discussions.filter((discussion) => discussion.id !== id),
    }));
  },
}));

