import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';
import {SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule,SidebarModule,Button],
  templateUrl: './whatsapp-button.component.html',

})
export class WhatsappButtonComponent {

  @Input() sidebarVisible:boolean=false
  @Input() titleText:string =''
  @Output() closedClick = new EventEmitter<void>();

  constructor() {
    this.sidebarVisible=true
  }

  onClosed(){

    this.sidebarVisible=false
    this.closedClick.emit()
    //console.log("passei")
  }

}
