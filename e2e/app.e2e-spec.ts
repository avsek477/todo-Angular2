import { TsDemoPage } from './app.po';

describe('ts-demo App', function() {
  let page: TsDemoPage;

  beforeEach(() => {
    page = new TsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
