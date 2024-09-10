
export interface ProductType{
    id:number,
    name:string,
    price:number,
    images:string[]
  }


export interface ProductTypeSelected extends ProductType{
    size:string
}
