import { nanoid } from 'nanoid';
import create from 'zustand'
import { Priority } from './common';
import { createTodo, TodoModel } from './todo'

export enum MeetingStatus {
  Unscheduled,
  Scheduled,
  Canceled,
  Completed
}


export interface MeetingModel {
    id?: string,
    title: string,
    time?: Date,
    status?: MeetingStatus,
    priority?: Priority,
    todos?: TodoModel[]
}

export function createMeeting(meeting: MeetingModel): MeetingModel{
  meeting.id = nanoid();
  meeting.priority = meeting.priority || Priority.Low;
  meeting.status = meeting.status || (meeting.time ? MeetingStatus.Scheduled : MeetingStatus.Unscheduled)
   if (meeting.todos) {
    meeting.todos = meeting.todos.map(createTodo)
   }
  return meeting;
}

interface MeetingState {
  meetings: MeetingModel[];
  addMeeting: (meeting: MeetingModel) => void;
  removeMeeting: (id: string) => void;
}

export const useMeetingStore = create<MeetingState>((set) => ({
  // initial state
  meetings: [],
  // methods for manipulating state
  addMeeting: (meeting: MeetingModel) => {
    set((state) => ({
      meetings: [
        ...state.meetings,
        createMeeting(meeting)
      ],
    }));
  },
  removeMeeting: (id) => {
    set((state) => ({
      meetings: state.meetings.filter((meeting) => meeting.id !== id),
    }));
  },
}));

