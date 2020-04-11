$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:use_cases/addDeveloperToSystem.feature");
formatter.feature({
  "name": "Add a developer to the system",
  "description": "  Description: A developer is added to the system\n  Actors: Developer",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A developer is succesfully added to the system",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the developer with first name \"Ole\" and last name \"Smith\" is added to the system",
  "keyword": "When "
});
formatter.match({
  "location": "acceptance_tests.steps.SystemSteps.theDeveloperWithFirstNameAndLastNameIsAddedToTheSystem(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the developer with ID \"OLSM\" and first name \"Ole\" and last name \"Smith\" is in the system",
  "keyword": "Then "
});
formatter.match({
  "location": "acceptance_tests.steps.SystemSteps.theDeveloperWithIDAndFirstNameAndLastNameIsInTheSystem(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});