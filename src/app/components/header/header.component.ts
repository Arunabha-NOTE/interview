import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import { SidebarModule } from 'primeng/sidebar';
import {DialogModule} from "primeng/dialog";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";




@Component({
  selector: 'app-header',
  standalone: true,
    imports: [MenubarModule, BadgeModule, AvatarModule, InputTextModule, RippleModule, ButtonModule, SidebarModule, ButtonModule, InputTextModule, DialogModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    sidebarVisible: boolean = false;
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
        ];
    }

    constructor(private router: Router) {}

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
