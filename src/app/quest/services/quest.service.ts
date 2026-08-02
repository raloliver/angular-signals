import { computed, Injectable, signal } from '@angular/core';
import { CaseInterface } from '../interfaces/case.interface';
import { MOCKED_CASES } from './mocks/cases.mock';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  public cases = signal<CaseInterface[]>(this.getCases());
  public caseIndex = signal<number>(0);
  public currentChoice = signal<string | null>(null);
  public correctChoiceTotal = signal<number>(0);

  public currentCase = computed(() => this.cases()[this.caseIndex()]);
  public isEndOfCases = computed(
    () => this.caseIndex() === this.cases().length,
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

  private randomOptions(item: CaseInterface): string[] {
    const options = [item.choice, ...item.options];

    return options
      .map((option) => ({ order: Math.random(), option }))
      .sort((a, b) => a.order - b.order)
      .map(({ option }) => option);
  }

  private getCases(): CaseInterface[] {
    return MOCKED_CASES;
  }
}
