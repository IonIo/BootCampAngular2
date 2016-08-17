/**
 * Created by ikon on 09.08.2016.
 */
import {Component, Input, OnChanges, Output, EventEmitter  } from 'angular2/core';

@Component(
    {
        selector: 'ai-star',
        templateUrl: 'app/shared/star.component.html',
        styleUrls: ['app/shared/star.component.css'],
    }
)
export class StarComponent implements  OnChanges {
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 85 /5;
    }
    onClick(): void {
        this.ratingClicked.emit('The rating ' + this.rating + ' was clicked!');
    }
}
