import { test, expect } from '@playwright/test'

test('visits the app root url', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('.title')).toHaveText('Schnittlauchiges Geschenketool')
})

test('navigates to user page', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('/')

  // Click on the navigation item
  await page.locator('.nav-item').getByText('User 1').click()

  // Wait for navigation to complete
  await page.waitForURL('/user1')

  // Check that the URL is correct
  expect(page.url()).toContain('/user1')
  await expect(page.locator('.title')).toHaveText('User 1')
})
