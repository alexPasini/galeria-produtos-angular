import { CommonModule } from '@angular/common';
import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductType} from "../shared/types/card-products.types"
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonModule,CommonModule,GalleriaModule],
  templateUrl: './product-card.component.html',

})
export class ProductCardComponent {

  @Input() product:ProductType | null =null

  @Output() productAdded: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  onAddProduct(product:ProductType){
    //console.log(product.name)
  }

  onAddToCartClick(){

    if(this.product){

      this.productAdded.emit(this.product)

    }
  }

}
