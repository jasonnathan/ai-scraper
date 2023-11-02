// src/tests/dataScraper.test.ts

import { scrapeData } from '../components/dataScraper';

describe('Data Scraper', () => {
  it('should return an object with scraped data', () => {
    const content = '<h1>Example Page</h1>'; // This would be the content of a web page
    const dataPoints = ['Title of the page', 'Main headings'];
    const data = scrapeData(content, dataPoints);
    expect(typeof data).toBe('object');
  });
});
