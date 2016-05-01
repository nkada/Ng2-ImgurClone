import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AppComponent} from '../app/app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: ImgurClone', () => {
  it('should have the `defaultMeaning` as 42', inject([AppComponent], (app: AppComponent) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([AppComponent], (app: AppComponent) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});
