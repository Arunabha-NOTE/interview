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
import {Router} from "@angular/router";


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
    constructor(private router: Router) {}

    resetDisabled() {
        this.disabled = true;
        this.checked = false;
    }


    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    submitTest() {
        this.router.navigate(['/submitted']).then(() => {
            // Disable back navigation by clearing history
            window.history.pushState(null, '', window.location.href);
            window.onpopstate = function () {
                window.history.pushState(null, '', window.location.href);
                alert("You cannot navigate back after submitting the test.");
            };
        });
    }
}
