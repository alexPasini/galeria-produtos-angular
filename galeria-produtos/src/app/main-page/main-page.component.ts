import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button"

interface ProductType{
  name:string,
  price:number,
  imageUrl:string
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './main-page.component.html',
  
})

export class MainPageComponent {

  productsExample:ProductType[] = [
    {name:"produto1",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto2",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    {name:"produto3",price:2,imageUrl:"../../assets/media/blusa1.png"},
    
  ]

  onAddProduct(product:ProductType){
    console.log(product.name)
  }

}
