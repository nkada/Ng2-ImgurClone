import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {AppComponent} from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent);
