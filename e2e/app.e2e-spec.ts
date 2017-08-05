import { OpsSupportPage } from './app.po';

describe('ops-support App', () => {
  let page: OpsSupportPage;

  beforeEach(() => {
    page = new OpsSupportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
