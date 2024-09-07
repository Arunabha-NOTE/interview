import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import {InstructionsComponent} from "../instructions/instructions.component";

@Component({
  selector: 'app-bio',
  standalone: true,
    imports: [FormsModule, CheckboxModule, InstructionsComponent],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.css'
})
export class BioComponent {

}
