import { Component } from '@angular/core';
import { ChoiceComponent } from '../choice/choice.component';

@Component({
  selector: 'case',
  standalone: true,
  imports: [ChoiceComponent],
  templateUrl: './case.component.html',
  styleUrl: './case.component.css',
})
export class CaseComponent {}
