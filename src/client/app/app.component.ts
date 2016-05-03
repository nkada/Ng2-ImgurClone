import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {Http, Response, Headers, HTTP_BINDINGS} from 'angular2/http';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import { Router } from 'angular2/router';
import {CategoryImagesComponent} from './components/category-images/category-images.component';
import {ImageDetailComponent} from './components/image-detail/image-detail.component';
import { ImagesService } from './services/images.service';
import {Category} from './category';
@Component({
  moduleId: __moduleName,
  selector: 'app',
  providers: [ROUTER_PROVIDERS, ImagesService, HTTP_BINDINGS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  {
    path: "/",
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: "/about",
    name: 'About',
    component: AboutComponent,
    useAsDefault: false
  },
  {
    path: "/category/:id",
    name: "Images",
    component: CategoryImagesComponent
  },
  {
    path: "/image/:id",
    name: "ImageDetail",
    component: ImageDetailComponent
  }
])
export class AppComponent {
title = "ImgurClone";
categories: Category[] = [];
constructor(private _imagesService: ImagesService, private _router: Router) { }
    ngOnInit() {

      this._imagesService.getCategories()
      .subscribe(res=> {
        console.log(res);
        this.categories = res.data
      });
      
    }

    gottoImages(category: Category){
      let link = ['Images', {id: category.id}]
      this._router.navigate(link);
    }
}
