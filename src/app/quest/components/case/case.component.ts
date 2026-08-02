import { Component, inject } from '@angular/core';
import { ChoiceComponent } from '../choice/choice.component';
import { QuestService } from '../../services/quest.service';

@Component({
  selector: 'case',
  standalone: true,
  imports: [ChoiceComponent],
  templateUrl: './case.component.html',
  styleUrl: './case.component.css',
})
export class CaseComponent {
  public questService = inject(QuestService);
}
