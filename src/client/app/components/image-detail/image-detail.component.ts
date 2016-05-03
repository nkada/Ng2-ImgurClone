import {Component, OnInit, provide} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {Http, Response, Headers, HTTP_BINDINGS, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

import {Image} from '../../image';
import {Category} from '../../category';
import { ImagesService } from '../../services/images.service';


@Component({
    moduleId: __moduleName,
    selector: 'image-detail',
    providers: [provide(ImagesService, { useClass: ImagesService }), HTTP_PROVIDERS],
    templateUrl: 'image-detail.component.html',
    styleUrls: ['image-detail.component.css'],
})

export class ImageDetailComponent implements OnInit {
    image: Image;

    constructor(
        private _imagesService: ImagesService
        , private _router: Router
        , private _routeParams: RouteParams
    ) { }

    ngOnInit() {
        let id = this._routeParams.get("id");
        this._imagesService.getImage(String(id))
            .then((result) => {
                this.image = result.data;
            });
    }

    goBack(){
       window.history.back();
    }
}
