import {Component, OnInit, provide } from 'angular2/core';
import {CategoriesComponent} from '../categories/categories.component';
import {ImagesService, MockImagesService} from '../../services/images.service';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
@Component({
  moduleId: __moduleName,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [CategoriesComponent],
  providers: [
    provide(ImagesService, {useClass: ImagesService}), HTTP_PROVIDERS
  ]
})

export class HomeComponent {
}
