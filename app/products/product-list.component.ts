/**
 * Created by ikon on 08.08.2016.
 */
import {Component, OnInit } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";

import {IProduct } from 'product';
import {StarComponent} from '../shared/star.component';
import {ProductFilterPipe} from './product-filter.pipe';
import {ProductService } from './product.service';
import {Observable} from "rxjs/Observable";

@Component({
   // selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    directives: [StarComponent, ROUTER_DIRECTIVES],
    pipes: [ProductFilterPipe],
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product list of elements';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    products: IProduct[];
    //products: Observable<IProduct[]>;

    constructor(private _productService:  ProductService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
       this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error
            );
        console.log('In OnInit')
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product list ' + message;
    }
}