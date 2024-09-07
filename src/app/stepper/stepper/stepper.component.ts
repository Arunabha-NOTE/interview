import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import {BioComponent} from "../../components/bio/bio.component";
import {PsyComponent} from "../../components/psy/psy.component";
import {ChatbotComponent} from "../../components/chatbot/chatbot.component";
import {VideoComponent} from "../../components/video/video.component";


@Component({
  selector: 'app-stepper',
  standalone: true,
    imports: [ButtonModule, StepperModule, BioComponent, PsyComponent, ChatbotComponent, VideoComponent],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

}
