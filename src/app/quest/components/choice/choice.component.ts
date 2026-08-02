import { Component, inject, input } from '@angular/core';
import { QuestService } from '../../services/quest.service';

@Component({
  selector: 'choice',
  standalone: true,
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css',
})
export class ChoiceComponent {
  public readonly OPTION_LABEL = ['A', 'B', 'C', 'D'];

  public questService = inject(QuestService);
  public option = input.required<string>();
  public optionIndex = input.required<number>();
}
