// @ts-check



const { test, expect } = require('@playwright/test');

test('navigation between pages works, create pro/task, start/stop tasks.', async ({ page }) => {

  //go to application url
  await page.goto('http://localhost:3000/');

  //test project and task mini pages and add project.
  await page.getByTestId('task-page-btn').click(); 

  await page.getByTestId('pro-page-btn').click(); 

  await page.getByTestId('add-pro-btn').click();

  await page.getByPlaceholder('Project name..').fill("IM A ROBOT"); 

  await page.getByPlaceholder('color code here...').fill('#00FFFF'); 

  await page.getByTestId('add-p-btn').click();
  

  //task logic here for adding
  await page.getByTestId('task-page-btn').click(); 

  await page.getByTestId('add-task-btn').click();

  await page.getByPlaceholder('Task name..').fill("this is an robot task"); 

  await page.getByTestId('task-select').selectOption("IM A ROBOT"); 
  
  await page.getByTestId('add-t-btn').click();

// go to calendar page.

await page.getByTestId('calendar-page').click();

// go to timer page.
await page.getByTestId('timer-page').click();


//start timer on task.  






});



// Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  //const getStarted = page.getByRole('link', { name: 'Get started' });

  // Expect an attribute "to be strictly equal" to the value.
  //await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  //await getStarted.click();
  
  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);