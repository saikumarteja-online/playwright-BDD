module.exports = {
    default: {
        requireModule: ['ts-node/register','allure-cucumberjs'],
        require: ['src/test/steps/**/*.ts'],
        paths: ['src/test/feature/**/*.feature'],
        format: 
        ["allure-cucumberjs/reporter",'progress-bar'],
  formatOptions: {
    resultsDir: "allure-results",
  },
        formatOptions: { snippetInterface: 'async-await' }
    }
};
