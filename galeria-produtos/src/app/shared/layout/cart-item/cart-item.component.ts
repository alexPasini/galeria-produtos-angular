import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { CartItemType } from '../../types/cart-item.types';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  standalone: true,  // Configurando como standalone
  imports: [CommonModule, ButtonModule,InputNumberModule,FormsModule],  // Importando módulos necessários
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() cart: CartItemType[] = [];
  @Output() itemRemoved = new EventEmitter<CartItemType>();

  removeItem(item: CartItemType) {
    this.itemRemoved.emit(item);
  }

  mudanca(item:CartItemType){
    console.log(item)
  }
}
