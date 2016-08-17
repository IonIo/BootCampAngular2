/**
 * Created by ikon on 10.08.2016.
 */
import {Injectable} from 'angular2/core';
import { IProduct} from './product';
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ProductService {
        private _productUrl = '/api/products/products.json';
    
        constructor(private _http: Http) {}

        getProducts(): Observable<IProduct[]> {
            return this._http.get(this._productUrl)
                .map((response: Response) => <IProduct[]>response.json())
                    .do(data => console.log("All: " + JSON.stringify(data)))
                .catch(this.handleError);
        }
        getProduct(id: number): Observable<IProduct> {
            return this.getProducts()
                .map((products: IProduct[]) => products.find(p => p.productId === id));
        }
        private handleError(error: Response) {
            console.error(error);
            return Observable.throw(error.json().error || 'Server error');
        }
}