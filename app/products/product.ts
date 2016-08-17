/**
 * Created by ikon on 09.08.2016.
 */
export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
}


export class  Product implements IProduct {
    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public productCode: string,
        public releaseDate: string,
        public description: string,
        public price: number,
        public starRating: number,
        public imageUrl: string){
    }

    calculateDiscount(percent: number) {
        return this.price - (this.price * percent / 100)
    }
}