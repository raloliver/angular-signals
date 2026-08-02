import { computed, Injectable, signal } from '@angular/core';
import { CaseInterface } from '../interfaces/case.interface';
import { MOCKED_CASES } from './mocks/cases.mock';

@Injectable({
  providedIn: 'root',
})
export class QuestService {
  public cases = signal<CaseInterface[]>(this.getCases());
  public caseNumber = signal<number>(0);
  public currentCase = computed(() => this.cases()[this.caseNumber()]);

  public goToNextCase(): void {
    this.caseNumber.set(this.caseNumber() + 1);
  }

  private getCases(): CaseInterface[] {
    return MOCKED_CASES;
  }
}
