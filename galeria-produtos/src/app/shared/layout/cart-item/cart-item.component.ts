import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProductType } from '../../types/card-products.types';

@Component({
  selector: 'app-cart-item',
  standalone: true,  // Configurando como standalone
  imports: [CommonModule, ButtonModule],  // Importando módulos necessários
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() cart: ProductType[] = [];
  @Output() itemRemoved = new EventEmitter<ProductType>();

  removeItem(item: ProductType) {
    this.itemRemoved.emit(item);
  }
}
