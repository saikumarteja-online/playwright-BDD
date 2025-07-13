Feature:calender selection autimation

Background:
  Given I open the calender page

Scenario:selecting the date
  When I select the date "24-10-2023"
  Then I should see the selected date "24-10-2023"