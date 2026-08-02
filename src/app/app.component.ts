import { Component } from '@angular/core';
import { QuestComponent } from './quest/quest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
