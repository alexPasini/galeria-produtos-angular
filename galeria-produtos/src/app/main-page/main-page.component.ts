import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductType } from '../shared/types/card-products.types';
import { HeaderComponent } from '../header/header.component';
import { SideBarModalComponent } from '../shared/layout/sidebar-modal/sidebar-modal.component';
import { CartItemComponent } from '../shared/layout/cart-item/cart-item.component'; // Importar CartItemComponent

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ProductCardComponent,
    HeaderComponent,
    SideBarModalComponent,
    CartItemComponent // Incluir CartItemComponent
  ],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  cart: ProductType[] = [];
  sidebarVisible = false;

  productsExample: ProductType[] = [
    {
      id: 1,
      name: 'produto1',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 2,
      name: 'produto1',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 3,
      name: 'produto1',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 4,
      name: 'produto1',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 5,
      name: 'produto1',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
  ];

  onAddedProductToCart(product: ProductType) {
    this.cart.push(product);
    this.sidebarVisible = true;
  }

  onRemoveItem(item: ProductType) {
    this.cart = this.cart.filter(cartItem => cartItem !== item);
  }

  onClosedSideBar() {
    this.sidebarVisible = false;
  }
}
