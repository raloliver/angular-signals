export interface CaseInterface {
  case: string;
  choice: string;
  options: string[];
}

export interface TriviaOptions {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
