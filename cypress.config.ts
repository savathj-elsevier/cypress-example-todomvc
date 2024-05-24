import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '3c2pgb',
  fixturesFolder: false,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8888',
  },
})
