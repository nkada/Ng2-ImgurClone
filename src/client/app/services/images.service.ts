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
    _imagesByCategory;
    baseUrl: string = "https://api.imgur.com/3/";
    constructor(http: Http) {
        this._http = http;
    }
    headers = new Headers({
        "Authorization": `Client-ID ${PrivateConfig.api.clientId}`
    })
    getCategories() {
        if (!this._categories) {
            this._categories = this._buildRequest("topics/defaults")
                .map((res: Response) => res.json())
                .publishReplay(1)
                .refCount();
        }
        return this._categories;

    }
    getImagesByCategory(id: string, options: any) {
        if (!options.sort) {
            options.sort = 'viral'
        }
        if (!options.page) {
            options.page = 1;
        }

        this._imagesByCategory = this._buildRequest(`topics/${id}/${options.sort}/${options.page}`)
            .map((res: Response) => res.json())
            .publishReplay(20)
            .refCount();

        return this._imagesByCategory;
    }

    getImage(id: string) {
        return this._buildRequest(`image/${id}`)
        .map((res: Response) => res.json());
    }
    _buildRequest(endpoint: string, id?: string) {

        let url = `${this.baseUrl}${endpoint}`;
        if (id) {
            url = `${url}/${id}`;
        }
        return this._http.get(url, { headers: this.headers })
    }

    clearCategories() {
        this._categories = null;
    }
}
