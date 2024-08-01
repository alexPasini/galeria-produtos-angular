import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import {SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar-modal',
  standalone: true,
  imports: [CommonModule,SidebarModule,Button],
  templateUrl: './sidebar-modal.component.html',

})
export class SideBarModalComponent {

  @Input() sidebarVisible:boolean=false

  constructor() {
    this.sidebarVisible=true
  }

}
