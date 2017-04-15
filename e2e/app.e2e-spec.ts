import { GhStarsPage } from './app.po';

describe('gh-stars App', () => {
  let page: GhStarsPage;

  beforeEach(() => {
    page = new GhStarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('GitHub Stars');
  });
});
