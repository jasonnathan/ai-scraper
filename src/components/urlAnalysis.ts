// src/components/urlAnalysis.ts

import puppeteer from 'puppeteer';

export async function analyzeUrl(url: string): Promise<string> {
  // Launch the browser with the new headless mode
  const browser = await puppeteer.launch({
    headless: 'new' as 'new' | boolean // This line is updated to specify the new headless mode
  });
  // Open a new page
  const page = await browser.newPage();
  // Navigate to the URL
  await page.goto(url, { waitUntil: 'networkidle2' });
  // Extract the content of the page
  const content = await page.content();
  // Close the browser
  await browser.close();
  // Return the content
  return content;
}
