import { Component } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import {BioComponent} from "../../components/bio/bio.component";
import {PsyComponent} from "../../components/psy/psy.component";
import {ChatbotComponent} from "../../components/chatbot/chatbot.component";
import {VideoComponent} from "../../components/video/video.component";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {InstructionsComponent} from "../../components/instructions/instructions.component";


@Component({
    selector: 'app-stepper',
    standalone: true,
    imports: [ButtonModule, StepperModule, BioComponent, PsyComponent, ChatbotComponent, VideoComponent, CheckboxModule, FormsModule, InstructionsComponent],
    templateUrl: './stepper.component.html',
    styleUrl: './stepper.component.css'
})
export class StepperComponent {
    checked: boolean | undefined = false;
    disabled: Boolean | undefined = true;
    onCheckboxChange() {
        this.disabled = !this.checked;
    }
}
