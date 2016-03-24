import { RxJSStudyPage } from './app.po';

describe('rx-jsstudy App', function() {
  let page: RxJSStudyPage;

  beforeEach(() => {
    page = new RxJSStudyPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rx-jsstudy Works!');
  });
});
