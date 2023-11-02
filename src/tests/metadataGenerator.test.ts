// src/tests/metadataGenerator.test.ts

import { generateMetadata } from '../components/metadataGenerator';
describe('Metadata Generator', () => {
  it('should return an object with metadata', () => {
    const scrapedData = { title: 'Test Title' };
    const storageLocation = 'Local Drive';
    const metadata = generateMetadata(scrapedData, storageLocation);
    expect(typeof metadata).toBe('object');
    expect(metadata).toHaveProperty('title');
    expect(metadata).toHaveProperty('date');
    expect(metadata).toHaveProperty('storageLocation');
  });
});
