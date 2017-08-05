import { FreelanceAppPage } from './app.po';

describe('freelance-app App', () => {
  let page: FreelanceAppPage;

  beforeEach(() => {
    page = new FreelanceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
