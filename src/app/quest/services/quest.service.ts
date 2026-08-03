import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CaseInterface, TriviaOptions } from '../interfaces/case.interface';
import { MOCKED_CASES } from './mocks/cases.mock';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  private http = inject(HttpClient);
  private apiURL =
    'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple';

  public cases = signal<CaseInterface[]>([]);
  public caseIndex = signal<number>(0);
  public currentChoice = signal<string | null>(null);
  public correctChoiceTotal = signal<number>(0);
  public error = signal<string | null>(null);

  public currentCase = computed(() => this.cases()[this.caseIndex()]);
  public isEndOfCases = computed(
    () => this.cases().length > 0 && this.caseIndex() === this.cases().length,
  );
  public caseOptions = computed(() => this.randomOptions(this.currentCase()));

  public goToNextCase(): void {
    const currentIndex = this.caseIndex();

    this.caseIndex.set(this.isEndOfCases() ? currentIndex : currentIndex + 1);
    this.currentChoice.set(null);
  }

  public setChoice(choice: string): void {
    this.currentChoice.set(choice);
    this.correctChoiceTotal.update((total) =>
      choice === this.currentCase().choice ? total + 1 : total,
    );
  }

  public goToStart(): void {
    this.caseIndex.set(0);
  }

  public getCases(): Observable<CaseInterface[]> {
    return this.http
      .get<{ results: TriviaOptions[] }>(this.apiURL)
      .pipe(map(({ results }) => this.normalizeCases(results)));
  }

  private randomOptions(item: CaseInterface): string[] {
    const options = [item.choice, ...item.options];

    return options
      .map((option) => ({ order: Math.random(), option }))
      .sort((a, b) => a.order - b.order)
      .map(({ option }) => option);
  }

  private normalizeCases(cases: TriviaOptions[]): CaseInterface[] {
    const decode = (value: string): string => decodeURIComponent(value);

    return cases.map(({ question, correct_answer, incorrect_answers }) => ({
      case: decode(question),
      choice: decode(correct_answer),
      options: incorrect_answers.map(decode),
    }));
  }

  private getMockedCases(): CaseInterface[] {
    return MOCKED_CASES;
  }
}
