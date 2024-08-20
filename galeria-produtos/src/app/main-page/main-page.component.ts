import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductType } from '../shared/types/card-products.types';
import { HeaderComponent } from '../header/header.component';
import { SideBarModalComponent } from '../shared/layout/sidebar-modal/sidebar-modal.component';
import { CartItemComponent } from '../shared/layout/cart-item/cart-item.component'; // Importar CartItemComponent
import { CartItemType } from '../shared/types/cart-item.types';
import { WhatsappButtonComponent } from '../shared/layout/whatsapp-button/whatsapp-button.component';

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
    CartItemComponent // Incluir CartItemComponent
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
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 2,
      name: 'produto2',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 3,
      name: 'produto3',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 4,
      name: 'produto4',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
    {
      id: 5,
      name: 'produto5',
      price: 2,
      imageUrl: '../../assets/media/blusa1.png',
    },
  ];


  get totalPrice() {
    return parseFloat(
      this.cart.reduce((total, cartItem) => {
        return total + cartItem.product.price * cartItem.quantity;
      }, 0).toFixed(2)
    );
  }




  onAddedProductToCart(product: ProductType) {

    const productId = product.id

    const oldProduct = this.cart.find(item=>item.product.id==productId)

    if(oldProduct){
      oldProduct.quantity+=1
    }else{

      this.cart.push({product:product,onCart:true,quantity:1});
    }


    this.sidebarVisible = true;
  }

  onRemoveItem(item:CartItemType) {
    this.cart = this.cart.filter(cartItem => cartItem.product.id !== item.product.id);
  }

  onClosedSideBar() {
    this.sidebarVisible = false;
  }
}
