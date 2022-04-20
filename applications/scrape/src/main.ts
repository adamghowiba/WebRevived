import { Builder, By, Key, ThenableWebDriver, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';
import fileSync from 'fs';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

class Scraper {
  driver: WebDriver;

  constructor(driver: WebDriver) {
    this.driver = driver;
  }

  startSearch = async () => {
    await this.driver.get('http://www.google.com');
  };

  takeScreenshot = async () => {
    const image = await this.driver.takeScreenshot();
    fileSync.writeFileSync('website.png', image, 'base64');
  };
}

const main = async () => {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    const scraper = new Scraper(driver);
    await scraper.startSearch();

    const logoELement = driver.findElement(By.className('lnXdpd'));

    driver.wait(until.elementIsVisible(logoELement));
    await scraper.takeScreenshot();
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit();
  }
};

main();
