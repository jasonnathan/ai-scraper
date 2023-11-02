// src/tests/intelligentGuess.test.ts

import { makeIntelligentGuess } from '../components/intelligentGuess';

describe('Intelligent Guess', () => {
  it('should return an array of guesses', () => {
    const content = '<h1>Example Page</h1>'; // This would be the content of a web page
    const guesses = makeIntelligentGuess(content);
    expect(Array.isArray(guesses)).toBe(true);
  });
});
