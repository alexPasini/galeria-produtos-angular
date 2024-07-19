import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductType} from "../shared/types/card-products.types"

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonModule,CommonModule],
  templateUrl: './product-card.component.html',
  
})
export class ProductCardComponent {

  @Input() product:ProductType | null =null

  onAddProduct(product:ProductType){
    console.log(product.name)
  }
}
