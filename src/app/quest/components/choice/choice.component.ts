import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestService } from '../../services/quest.service';

@Component({
  selector: 'choice',
  standalone: true,
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css',
  imports: [CommonModule],
})
export class ChoiceComponent {
  public questService = inject(QuestService);
  public readonly OPTION_LABEL = ['A', 'B', 'C', 'D'];

  public option = input.required<string>();
  public optionIndex = input.required<number>();

  private currentChoice = computed(() => this.questService.currentChoice());
  private correctChoice = computed(
    () => this.questService.currentCase().choice,
  );

  public isAnOption = computed(() => {
    const currentChoice = this.currentChoice();

    return !!currentChoice && this.option() === this.correctChoice();
  });

  public isNotAnOption = computed(() => {
    const currentChoice = this.currentChoice();

    return (
      this.option() === currentChoice && currentChoice !== this.correctChoice()
    );
  });
}
