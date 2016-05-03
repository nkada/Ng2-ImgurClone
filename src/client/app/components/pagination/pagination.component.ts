'use strict';

import {Component, Input, OnInit, EventEmitter, Output} from 'angular2/core';
import {Page} from '../../page';

@Component({
    moduleId: __moduleName,
    selector: 'pagination',
    templateUrl: 'pagination.component.html',
    styleUrls: ['pagination.component.css'],
})
export class PaginationComponent {
    @Input()
    public currentPage: Page;
    private initialPages: number = 10;

    pages: Page[] = [];

    @Output()
    onPageChange = new EventEmitter<boolean>();

    ngOnInit() {
        var firstPage = new Page(1, true);
        this.pages.push(firstPage);
        this.currentPage = firstPage;
        for (var i = 2; i <= this.initialPages; i++) {
            this.pages.push(new Page(i, false))
        }
    }
    private resetPages() {
        this.pages.forEach(function(page) {
            page.isActive = false;
        })
    }
    selectPage(page: any) {
        this.resetPages();
        page.isActive = true;
        this.currentPage = page;
        this.onPageChange.emit(true);
    }

    nextPage() {

        var instance = this.pages.filter(function(page) {
            return page.number === this.currentPage.number + 1;
        }, this)[0];


        if (instance === undefined) {
            this.resetPages();
            var currentMax = this.currentPage.number + 1;
            var newPage = new Page(currentMax, true);
            this.pages.push(newPage)
            this.currentPage = newPage;
            this.onPageChange.emit(true);
            return;
        } else {
            this.resetPages();
        }


        instance.isActive = true;
        this.currentPage = instance;

        this.onPageChange.emit(true);
    }

    previousPage() {

        var instance = this.pages.filter(function(page) {
            return page.number === this.currentPage.number - 1;
        }, this)[0];
        if (instance === undefined) return;

        this.resetPages();
        instance.isActive = true;
        this.currentPage = instance;
        this.onPageChange.emit(true);
    }

}
