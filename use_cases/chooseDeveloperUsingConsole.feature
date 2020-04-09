Feature: The developer specifies the active user
  Description: The developer specifies which person is using the program
  Actors: Developer

  Background: There is a developer registered in the system
    Given The following developer(s) is/are registered in the system
      | Ole Smith|
      | Birte Rasmussen |

  # Main scenario
  Scenario: The active user is chosen
    When the developer with ID "OS01" and name "Ole Smith" is set as project leader for project with ID "030901"
    Then the project with ID "030901" has the developer with ID "OLSM" and name "Ole Smith" as project leader