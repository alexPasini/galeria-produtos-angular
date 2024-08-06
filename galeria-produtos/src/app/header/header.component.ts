import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProductType} from "../shared/types/card-products.types"

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule,CommonModule],
  templateUrl: './header.component.html',

})
export class HeaderComponent {

  @Input() product:ProductType | null =null

  onAddProduct(product:ProductType){
    //console.log(product.name)
  }
}
