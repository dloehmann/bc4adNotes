import { Bc4adAppPage } from './app.po';

describe('bc4ad-app App', () => {
  let page: Bc4adAppPage;

  beforeEach(() => {
    page = new Bc4adAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
