import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
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

  @Output() productAdded: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  onAddProduct(product:ProductType){
    console.log(product.name)
  }

  onAddToCartClick(){

    if(this.product){

      this.productAdded.emit(this.product)

    }
  }

}
