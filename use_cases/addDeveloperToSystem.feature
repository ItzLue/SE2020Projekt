Feature: Add a developer to the system
  Description: A developer is added to the system
  Actors: Developer

  # Main scenario
  Scenario: A developer is succesfully added to the system
    When the developer with name "Ole Smith" is added to the system
    Then the developer with ID "OS01" and name "Ole Smith" is in the system


