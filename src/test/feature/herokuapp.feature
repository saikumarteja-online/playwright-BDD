Feature:Automation of Herokuapp website

Background:
  Given I open the Herokuapp website
@Herokuapp
Scenario:Adding and removing of elements
    When I add an element
    Then I should see the element added
    When I remove the element
    Then I should not see the element anymore

@Herokuapp @brokenImage
Scenario:Checking broken image
    When I check the broken image
    Then I should see the broken image
  
@Herokuapp @checkbox
Scenario:Checking checkbox
    When I check the checkbox
    Then I should see the checkbox checked

@Herokuapp @contextMenu
Scenario:Checking context menu
    When I right click on the context menu
    Then I should see the context menu displayed
