import { TabsPage } from './app.po';

describe('tabs App', () => {
  let page: TabsPage;

  beforeEach(() => {
    page = new TabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
