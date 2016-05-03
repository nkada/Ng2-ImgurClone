import {Component, OnInit, provide, AfterViewInit, ViewChild, ChangeDetectorRef} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {Http, Response, Headers, HTTP_BINDINGS, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {Image} from '../../image';
import {Page} from '../../page';
import {Category} from '../../category';
import { ImagesService } from '../../services/images.service';
import {ImageTileComponent} from '../image-tile/image-tile.component';
import {SpinnerComponent} from '../spinner/spinner.component';
import {PaginationComponent} from '../pagination/pagination.component';

@Component({
    moduleId: __moduleName,
    selector: 'images',
    directives: [ImageTileComponent, SpinnerComponent, PaginationComponent],
    providers: [provide(ImagesService, { useClass: ImagesService }), HTTP_PROVIDERS],
    templateUrl: 'category-images.component.html',
    styleUrls: ['category-images.component.css'],
})

export class CategoryImagesComponent  {
    images: Image[] = [];
    public isRequesting: boolean;
    topic: string;
    public page: Page;
    constructor(
        private _imagesService: ImagesService
        , private _router: Router
        , private _routeParams: RouteParams
        , private _changeDetectionRef: ChangeDetectorRef
    ) { }

    @ViewChild(PaginationComponent)
    private _paginationComponent: PaginationComponent;
    ngAfterViewInit() {
        this.page = this._paginationComponent.currentPage;
        this.fetchImages(this.page.number);
        this._changeDetectionRef.detectChanges();
    }

  onPageChange(page:boolean){
    console.log("Changed");
    this.fetchImages(this._paginationComponent.currentPage.number);
  }
    fetchImages(pageNumber: number) {
        this.isRequesting = true;
        let id = this._routeParams.get("id");

        this._imagesService.getImagesByCategory(id, { page: pageNumber })
            .then((result) => {
                this.images = result.data.filter((image) => {
                    this.topic = image.topic;
                    return !image.is_album;
                })

                this.stopRefreshing();
            });
    }

    private stopRefreshing() {
        this.isRequesting = false;
    }
}
