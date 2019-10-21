import { Product } from './product';
export class ProductData {
       productList: Product[]=[
        {productId:1001,name:"mobile",brand:"vivo",price:17000},
        {productId:1002,name:"Tv",brand:"sony",price:45000},
    {productId:1003,name:"laptop",brand:"HP",price:52000}, {productId:1004,name:"laptop",brand:"HP",price:52000}];

    getproductList():Product[]
    {
        return this.productList;
    }
}

