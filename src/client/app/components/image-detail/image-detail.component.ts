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
        console.log(id);
        this._imagesService.getImage(String(id))
            .map((res: Response) => res.json())
            .subscribe((result) => {
              console.log(result.data);
                this.image = result.data;
            });
    }

    goBack(){
      console.log(window.history);
       window.history.back();
    }
}
