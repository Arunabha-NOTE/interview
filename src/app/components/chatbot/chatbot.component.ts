import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { InputTextareaModule } from 'primeng/inputtextarea';
import {ButtonDirective} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-chatbot',
  standalone: true,
    imports: [
        FormsModule,
        InputTextareaModule,
        ButtonDirective,
        NgIf,
        NgForOf
    ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
    messages: { text: string, sender: string }[] = []; // Holds the chat messages
    userInput: string = ''; // Holds user input

    // Simulate a bot response after a user sends a message
    sendMessage() {
        if (this.userInput.trim()) {
            // Add the user's message
            this.messages.push({ text: this.userInput, sender: 'user' });

            // Clear the input
            this.userInput = '';

            // Simulate a bot response after 1 second
            setTimeout(() => {
                this.messages.push({ text: 'This is a bot response.', sender: 'bot' });
            }, 1000);
    }
    }
}
