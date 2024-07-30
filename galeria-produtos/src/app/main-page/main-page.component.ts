import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button"
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductType } from '../shared/types/card-products.types';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,ButtonModule,ProductCardComponent,HeaderComponent],
  templateUrl: './main-page.component.html',
  
})

export class MainPageComponent {

  productsExample:ProductType[] = [
    {name:"produto1",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto2",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
   
    
  ]

 
  

}
