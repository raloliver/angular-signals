import { Component } from '@angular/core';
import { CaseComponent } from './components/case/case.component';
import { ChoiceComponent } from './components/choice/choice.component';

@Component({
  selector: 'quest',
  standalone: true,
  imports: [CaseComponent, ChoiceComponent],
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.css',
})
export class QuestComponent {}
