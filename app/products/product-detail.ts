/**
 * Created by ikon on 10.08.2016.
 */
import {Component,OnInit, OnDestroy } from 'angular2/core';
import {RouteParams, Router  } from 'angular2/router';

import { StarComponent } from '../shared/star.component';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    //selector: 'pm-products',
    templateUrl: 'app/products/product-detail.html',
    directives: [StarComponent]
   // styleUrls: ['app/products/product-detail.component.css'],
})

/*export class ProductDetailComponent {
    pageTitle: string = 'Product detail';

    constructor(private _routeParams: RouteParams, private _router: Router ) {
        let id = +this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
        console.log(this._routeParams.get('id'));
    }

    onBack(): void {
        this._router.navigate(['Products']);
    }
}*/

export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
    private sub: any;

    constructor(private router: Router,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
        /*this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            });*/
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this.router.navigate(['/products']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}