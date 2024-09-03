import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductType } from '../shared/types/card-products.types';
import { HeaderComponent } from '../header/header.component';
import { SideBarModalComponent } from '../shared/layout/sidebar-modal/sidebar-modal.component';
import { CartItemComponent } from '../shared/layout/cart-item/cart-item.component';
import { CartItemType } from '../shared/types/cart-item.types';
import { WhatsappButtonComponent } from '../shared/layout/whatsapp-button/whatsapp-button.component';
import { fromEvent } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ProductCardComponent,
    HeaderComponent,
    SideBarModalComponent,
    WhatsappButtonComponent,
    CartItemComponent,
    FooterComponent,
  ],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  cart: CartItemType[] = [];
  sidebarVisible = false;

  productsExample: ProductType[] = [
    {
      id: 1,
      name: 'produto1',
      price: 2,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 2,
      name: 'produto2',
      price: 15.5,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 3,
      name: 'produto3',
      price: 10,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 4,
      name: 'produto4',
      price: 25,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 5,
      name: 'produto5',
      price: 30,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 6,
      name: 'produto6',
      price: 8.75,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 7,
      name: 'produto7',
      price: 12.99,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 8,
      name: 'produto8',
      price: 50,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 9,
      name: 'produto9',
      price: 18.45,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    },
    {
      id: 10,
      name: 'produto10',
      price: 22,
      images: ["../../assets/media/blusa1.png", "../../assets/media/foto.jpeg"]
    }
  ];

  get totalPrice() {
    return parseFloat(
      this.cart.reduce((total, cartItem) => {
        return total + cartItem.product.price * cartItem.quantity;
      }, 0).toFixed(2)
    );
  }

  get TotalQuantity(){


    return this.cart.reduce((total,item)=>{
      return total+item.quantity
    },0)


  }

  onAddedProductToCart(product: ProductType) {
    const productId = product.id;

    const oldProduct = this.cart.find(item => item.product.id === productId);

    if (oldProduct) {
      oldProduct.quantity += 1;
    } else {
      this.cart.push({ product, onCart: true, quantity: 1 });
    }

    // this.sidebarVisible = true;
  }

  onRemoveItem(item: CartItemType) {
    this.cart = this.cart.filter(cartItem => cartItem.product.id !== item.product.id);
  }

  onClosedSideBar() {
    this.sidebarVisible = false;
  }

  buttonCartClicked(){
    this.sidebarVisible=true
  }
}
