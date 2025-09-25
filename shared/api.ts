/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface Question {
  id: string;
  firstName: string;
  lastName: string;
  text: string;
  createdAt: number;
  hidden?: boolean;
}

export interface QuestionsState {
  questions: Question[];
  selectedId: string | null;
}

export interface QuestionsListResponse extends QuestionsState {}

export interface SubmitQuestionRequest {
  firstName: string;
  lastName: string;
  text: string;
}

export interface SubmitQuestionResponse {
  ok: true;
  question: Question;
}
