export class Demo1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('demo1-app h1')).getText();
  }
}
