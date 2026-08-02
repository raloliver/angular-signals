import { Component, inject } from '@angular/core';
import { CaseComponent } from './components/case/case.component';
import { QuestService } from './services/quest.service';

@Component({
  selector: 'quest',
  standalone: true,
  imports: [CaseComponent],
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.css',
})
export class QuestComponent {
  public questService = inject(QuestService);
}
