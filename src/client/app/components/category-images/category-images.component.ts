import {Component, OnInit, provide} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {Http, Response, Headers, HTTP_BINDINGS, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {Image} from '../../image';
import {Category} from '../../category';
import { ImagesService } from '../../services/images.service';
import {ImageTileComponent} from '../image-tile/image-tile.component';


@Component({
    moduleId: __moduleName,
    selector: 'images',
    directives: [ImageTileComponent],
    providers: [provide(ImagesService, { useClass: ImagesService }), HTTP_PROVIDERS],
    templateUrl: 'category-images.component.html',
    styleUrls: ['category-images.component.css'],
})

export class CategoryImagesComponent implements OnInit {
    images: Image[] = [];
    topic: string;
    constructor(
        private _imagesService: ImagesService
        , private _router: Router
        , private _routeParams: RouteParams
    ) { }

    ngOnInit() {
        let id = +this._routeParams.get("id");
        this._imagesService.getImagesByCategory(id)
            .map((res: Response) => res.json())
            .subscribe((result) => {
                this.images = result.data.filter((image) => {
                  this.topic = image.topic;
                    return !image.is_album;
                })
            });
    }
}
