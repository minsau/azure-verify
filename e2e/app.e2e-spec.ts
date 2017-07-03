import { AzureVerifyPage } from './app.po';

describe('azure-verify App', () => {
  let page: AzureVerifyPage;

  beforeEach(() => {
    page = new AzureVerifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
