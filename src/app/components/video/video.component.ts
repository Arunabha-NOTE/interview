import { Component, ElementRef, ViewChild } from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-video',
  standalone: true,
    imports: [
        ButtonDirective,
        NgIf
    ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef;

    question: string = 'Why do you think you are fit for this specific position?';
    isRecording: boolean = false;
    mediaRecorder: any;
    recordedBlobs: any[] = [];
    videoUrl: string | null = null;

    startRecording() {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                this.videoPlayer.nativeElement.srcObject = stream;
                this.isRecording = true;

                this.mediaRecorder = new MediaRecorder(stream);
                this.mediaRecorder.ondataavailable = (event: any) => {
                    if (event.data.size > 0) {
                        this.recordedBlobs.push(event.data);
                    }
                };

                this.mediaRecorder.start();
            })
            .catch(error => {
                console.error('Error accessing media devices.', error);
            });
    }

    stopRecording() {
        this.mediaRecorder.stop();
        this.isRecording = false;

        const videoBlob = new Blob(this.recordedBlobs, { type: 'video/webm' });
        this.videoUrl = window.URL.createObjectURL(videoBlob);

        const stream = this.videoPlayer.nativeElement.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track: any) => track.stop()); // Stop the video stream
    }

}
