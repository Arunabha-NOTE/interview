import { Component } from '@angular/core';
import {StepperComponent} from "../../stepper/stepper/stepper.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        StepperComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
