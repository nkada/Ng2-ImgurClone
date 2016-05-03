import {Component, Input, OnInit} from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import {Image} from '../../image';



@Component({
    moduleId: __moduleName,
    selector: 'image-tile',
    providers: [],
    templateUrl: 'image-tile.component.html',
    styleUrls: ['image-tile.component.css'],
})

export class ImageTileComponent {
    @Input()
    image: Image;

    constructor(
        private _router: Router
    ) {

    }
    public thumbnail: string;

    ngOnInit(){
      console.log(this.image);
      var base = "http://i.imgur.com/"
      this.thumbnail = `${base}${this.image.id}t.jpg`;
    }

    goToImageDetail(image: Image) {
        let link = ['ImageDetail', { id: image.id }]
        this._router.navigate(link);
    }

}
