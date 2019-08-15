import { HocPage } from './app.po';

describe('hoc App', function() {
  let page: HocPage;

  beforeEach(() => {
    page = new HocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
