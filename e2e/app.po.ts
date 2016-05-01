export class ImgurClonePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('imgur-clone-app p')).getText();
  }
}
