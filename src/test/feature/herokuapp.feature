Feature:Automation of Herokuapp website

Background:
  Given I open the Herokuapp website
@Herokuapp
Scenario:Adding and removing of elements
    When I add an element
    Then I should see the element added
    When I remove the element
    Then I should not see the element anymore

