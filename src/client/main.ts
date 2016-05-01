import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {ImgurCloneApp} from './app/imgur-clone.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(ImgurCloneApp);
