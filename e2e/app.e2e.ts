import { ImgurClonePage } from './app.po';

describe('imgur-clone App', function() {
  let page: ImgurClonePage;

  beforeEach(() => {
    page = new ImgurClonePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('imgur-clone Works!');
  });
});
