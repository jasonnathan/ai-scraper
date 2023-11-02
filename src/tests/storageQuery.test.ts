// src/tests/storageQuery.test.ts

import { queryStorageOptions } from '../components/storageQuery';

describe('Storage Query', () => {
  it('should return an array of storage options', () => {
    const options = queryStorageOptions();
    expect(Array.isArray(options)).toBe(true);
  });
});
