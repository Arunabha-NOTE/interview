import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-psy',
  standalone: true,
    imports: [
        NgClass,
        FormsModule,
        NgForOf
    ],
  templateUrl: './psy.component.html',
  styleUrl: './psy.component.css'
})
export class PsyComponent {
    question = {
        text: 'What are the best strategies for project management?',
        options: [
            { text: 'Agile' },
            { text: 'Waterfall' },
            { text: 'Scrum' },
            { text: 'Kanban' }
        ]
    };
    mostEffective: number | null = null; // Holds the most effective option number
    leastEffective: number | null = null; // Holds the least effective option number
}
