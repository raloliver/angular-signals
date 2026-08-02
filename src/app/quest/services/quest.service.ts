import { computed, Injectable, signal } from '@angular/core';
import { CaseInterface } from '../interfaces/case.interface';
import { MOCKED_CASES } from './mocks/cases.mock';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  public cases = signal<CaseInterface[]>(this.getCases());
  public caseIndex = signal<number>(0);
  public currentCase = computed(() => this.cases()[this.caseIndex()]);
  public isEndOfCases = computed(
    () => this.caseIndex() === this.cases().length,
  );

  public goToNextCase(): void {
    const currentIndex = this.caseIndex();

    this.caseIndex.set(this.isEndOfCases() ? currentIndex : currentIndex + 1);
  }

  public goToStart(): void {
    this.caseIndex.set(0);
  }

  private getCases(): CaseInterface[] {
    return MOCKED_CASES;
  }
}
