import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {Http, Response, Headers, HTTP_BINDINGS} from 'angular2/http';
import 'rxjs/Rx';

import {Image} from '../../image';
import {Category} from '../../category';
import { ImagesService } from '../../services/images.service';



@Component({
  moduleId: __moduleName,
  selector: 'categories',
  providers: [],
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
})

export class CategoriesComponent implements OnInit {
  categories : Category[] = [];

  constructor(private _imagesService: ImagesService, private _router: Router){ }

  ngOnInit(){
    this._imagesService.getCategories()
    .map((res:Response) => res.json())
    .subscribe((result)=>{
      console.log(result.data);
      this.categories = result.data;
    });
  }

  gotoCategoryDetail(category: Category){
    let link = ['CategoryDetail', {id: category.id}]
    this._router.navigate(link);
  }
}
