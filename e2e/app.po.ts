export class RxJSStudyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rx-jsstudy-app p')).getText();
  }
}
