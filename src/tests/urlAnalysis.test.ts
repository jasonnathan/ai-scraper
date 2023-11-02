// src/tests/urlAnalysis.test.ts

import { analyzeUrl } from '../components/urlAnalysis';

describe('URL Analysis', () => {
  it('should return a string', async () => {
    const content = await analyzeUrl('https://google.com');
    expect(typeof content).toBe('string');
  });
});
