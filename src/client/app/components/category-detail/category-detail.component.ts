import {Component, OnInit} from 'angular2/core';
import {Image} from '../../image';
import {Category} from '../../category';
import { ImagesService } from '../../services/images.service';
import {Http, Response, Headers, HTTP_BINDINGS} from 'angular2/http';
import 'rxjs/Rx';


@Component({
  moduleId: __moduleName,
  selector: 'category-detail',
  providers: [],
  templateUrl: 'category-detail.component.html',
  styleUrls: ['category-detail.component.css'],
})

export class CategoryDetailComponent  {
}
