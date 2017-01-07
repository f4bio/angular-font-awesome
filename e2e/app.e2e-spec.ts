import { Angular2FontAwesomePage } from './app.po';

describe('angular2-font-awesome App', function() {
  let page: Angular2FontAwesomePage;

  beforeEach(() => {
    page = new Angular2FontAwesomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
