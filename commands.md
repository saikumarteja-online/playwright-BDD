# Import commands to reminber

*To run selected feature file* :- npx playwright test --grep "my_feature.feature"
*To run allure report* :- allure serve allure-results
"test": "cucumber-js --require-module ts-node/register --require src/test/steps/**/*.ts src/test/feature/**/*.feature",
