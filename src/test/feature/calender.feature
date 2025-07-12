Feature:calender selection autimation

Background:
  Given I open the calender page

Scenario:selecting the date
  When I select the date "24-1-2025"
  Then I should see the selected date "2025-07-08"