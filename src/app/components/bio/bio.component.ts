import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {FileUploadEvent, FileUploadModule} from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import {InputTextareaModule} from "primeng/inputtextarea";


interface UploadEvent {
    originalEvent: Event;
    files: File[];
}


@Component({
    selector: 'app-bio',
    standalone: true,
    imports: [FormsModule,  FileUploadModule, ToastModule, CommonModule, InputTextareaModule],
    providers: [MessageService],
    templateUrl: './bio.component.html',
    styleUrl: './bio.component.css'
})
export class BioComponent {
    value: string= "";

    uploadedFiles: any[] = [];
    about: string = "";
    hire: string = "";
    unique: string = "";
    position: string = "";

    constructor(private messageService: MessageService) {}

    onUpload(event: FileUploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }

}
