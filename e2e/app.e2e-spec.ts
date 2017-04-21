import { MyMtaStopInfoPage } from './app.po';

describe('my-mta-stop-info App', () => {
  let page: MyMtaStopInfoPage;

  beforeEach(() => {
    page = new MyMtaStopInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
