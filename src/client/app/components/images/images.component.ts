import {Component, OnInit, provide} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {Http, Response, Headers, HTTP_BINDINGS, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {Image} from '../../image';
import {Category} from '../../category';
import { ImagesService } from '../../services/images.service';


@Component({
    moduleId: __moduleName,
    selector: 'images',
    providers: [provide(ImagesService, { useClass: ImagesService }), HTTP_PROVIDERS],
    templateUrl: 'images.component.html',
    styleUrls: ['images.component.css'],
})

export class ImagesComponent implements OnInit {
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
            .then((res) =>{
              this.images = res.data.filter((image) => {
                this.topic = image.topic;
                return !image.is_album;
              })
            })
    }


    goToImageDetail(image: Image) {
        let link = ['ImageDetail', { id: image.id }]
        this._router.navigate(link);
    }
}
