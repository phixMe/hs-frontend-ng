import { NgFrontendChallengePage } from './app.po';

describe('ng-frontend-challenge App', () => {
  let page: NgFrontendChallengePage;

  beforeEach(() => {
    page = new NgFrontendChallengePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
