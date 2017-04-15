import { browser, element, by } from 'protractor';

describe('Results-list navigation', () => {

  beforeEach(() => {
    browser.get('/results');
  });

  it('should navigate to the results lists page', () => {
    const h2Text = element(by.css('h2')).getText();
    expect(h2Text).toContain('Total Results');
  });
});
