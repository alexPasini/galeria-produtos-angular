import { ProductType } from './card-products.types';

export interface CartItemType{
  product : ProductType
  onCart:boolean
  quantity:number
}
