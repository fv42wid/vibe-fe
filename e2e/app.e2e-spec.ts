import { VibePage } from './app.po';

describe('vibe App', function() {
  let page: VibePage;

  beforeEach(() => {
    page = new VibePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
