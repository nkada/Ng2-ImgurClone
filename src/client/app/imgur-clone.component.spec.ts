import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ImgurCloneApp} from '../app/imgur-clone.component';

beforeEachProviders(() => [ImgurCloneApp]);

describe('App: ImgurClone', () => {
  it('should have the `defaultMeaning` as 42', inject([ImgurCloneApp], (app: ImgurCloneApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ImgurCloneApp], (app: ImgurCloneApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

