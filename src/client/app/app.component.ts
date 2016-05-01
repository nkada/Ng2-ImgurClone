import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {CategoryDetailComponent} from './components/category-detail/category-detail.component';

@Component({
  moduleId: __moduleName,
  selector: 'app',
  providers: [ROUTER_PROVIDERS],
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
    name: "CategoryDetail",
    component: CategoryDetailComponent
  }
])
export class AppComponent {
title = "ImgurClone";
}
