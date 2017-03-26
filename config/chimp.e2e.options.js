module.exports = {
  path: 'tests/specifications',
  browser: process.env.BROWSER ? process.env.BROWSER : 'chrome',
  chai: true,
  timeout: 5000,
  port: 4444,
  e2eTags: '@e2e',
  e2eSteps: 'tests/step_definitions/end-to-end',
  ddp: 'http://localhost:3000',
  // format: 'progress'
};
