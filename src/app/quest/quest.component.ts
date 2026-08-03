import { Component, inject, OnInit } from '@angular/core';
import { CaseComponent } from './components/case/case.component';
import { QuestService } from './services/quest.service';

@Component({
  selector: 'quest',
  standalone: true,
  imports: [CaseComponent],
  templateUrl: './quest.component.html',
  styleUrl: './quest.component.css',
})
export class QuestComponent implements OnInit {
  public questService = inject(QuestService);

  ngOnInit(): void {
    this.questService.getCases().subscribe({
      next: (cases) => this.questService.cases.set(cases),
      error: ({ message }) => this.questService.error.set(message),
    });
  }

  public refresh():void {
    window.location.reload();
  }
}
