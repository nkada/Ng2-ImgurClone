import {Image} from '../image';
import {IMAGES} from './mock-images'
import { Injectable } from 'angular2/core';
import {Http, Response, Headers, HTTP_BINDINGS} from 'angular2/http';
import {PrivateConfig} from '../private';
import 'rxjs/Rx';

export interface IImagesService {
    getImages(): Promise<Image[]>
    getImage(id: string): Promise<Image>
}

//if environment === dev
@Injectable()
export class MockImagesService {

    getImages() {
        return Promise.resolve();
    }

    getImage(id: string) {
        return Promise.resolve(IMAGES).then(
            images => images.filter(image => image.id === id)[0]
        )
    }
}

@Injectable()
export class ImagesService {
    _http: Http
    _categories;
    baseUrl: string = "https://api.imgur.com/3/";
    constructor(http: Http) {
        this._http = http;
    }
    headers = new Headers({
      "Authorization": `Client-ID ${PrivateConfig.api.clientId}`
    });
    getCategories() {
      return this._buildRequest("topics/defaults")
    }
    getImagesByCategory(id: string){
      return this._buildRequest("topics", id);
    }

    getImage(id: string) {
      return this._buildRequest("image", id);
    }

    _buildRequest(endpoint: string, id?: string){

      let url = `${this.baseUrl}${endpoint}`;
      if(id){
        url = `${url}/${id}`;
      }
      return this._http.get(url, {headers: this.headers})
      .toPromise()
      .then((response) => response.json())
    }
}
