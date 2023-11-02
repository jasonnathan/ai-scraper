// src/index.ts

import { analyzeUrl } from './components/urlAnalysis';

const testUrl = 'https://example.com'; // Replace with the URL you want to analyze

analyzeUrl(testUrl)
  .then(content => {
    console.log(content); // Here you would add the logic to process the content
  })
  .catch(error => {
    console.error('Error analyzing URL:', error);
  });
