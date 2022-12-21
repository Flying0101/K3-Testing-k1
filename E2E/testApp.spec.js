// @ts-check

   

const { test, expect } = require('@playwright/test');

test('navigation between pages works, create pro/task, start/stop tasks.', async ({ page }) => {

  //go to application url.
  await page.goto('http://localhost:3000/');


  // test project and task page.
  await page.getByTestId('task-page-btn').click();

  await page.getByTestId('pro-page-btn').click();


  // add project.
  await page.getByTestId('add-pro-btn').click();

  await page.getByTestId('project-input').click();

  await page.getByTestId('project-input').fill('This is an robot');

  await page.getByTestId('color-input').click();

  await page.getByTestId('color-input').fill('#00FFFF');

  await page.getByTestId('add-p-btn').click();


  // go to task page, add task.
  await page.getByTestId('task-page-btn').click();

  await page.getByTestId('add-task-btn').click();

  await page.getByTestId('task-input').click();

  await page.getByTestId('task-input').fill('Robot Task');

  await page.getByTestId('task-select').selectOption('#00FFFF');

  await page.getByTestId('add-t-btn').click();


  // go to calendar page.
  await page.getByTestId('calendar-page').click();

  await page.getByRole('combobox').selectOption('19/12/2022');


  // go to timer page, start and stop timer for one task.
  await page.getByTestId('timer-page').click();

  await page.locator('div:nth-child(9) > .icon-container > .play-icon').click();

  await page.locator('.paus-icon').click();


  // go back to main-page.
  await page.getByTestId('main-page').click();


  //end of test.





});


