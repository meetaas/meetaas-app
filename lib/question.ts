import { nanoid } from "nanoid";
import { Priority } from "./common";

export enum QuestionStatus {
    Open,
    Answered
}

export interface QuestionModel {
    id?: string,
    title: string,
    context?: string,
    priority?: Priority,
    status?: QuestionStatus,
}

export function createQuestion(question: QuestionModel): QuestionModel{
    question.id = nanoid()
    question.priority = question.priority || Priority.Low;
    question.status = question.status || QuestionStatus.Open;
    return question;
}