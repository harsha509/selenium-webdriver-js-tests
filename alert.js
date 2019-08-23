const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();


driver.get('https://seleniumhq.github.io/docs/site/en/webdriver/js_alerts_prompts_and_confirmations/');

driver.sleep(10000).then(async function(){
    //Click the link to activate the alert
    await driver.findElement(By.linkText('See an example alert')).click();

    // Wait for the alert to be displayed
    await driver.wait(until.alertIsPresent());

    // Store the alert in a variable
    let alert = await driver.switchTo().alert();

    //Store the alert text in a variable
    let alertText = await alert.getText();

    //Press the OK button
    await alert.dismiss();
});





