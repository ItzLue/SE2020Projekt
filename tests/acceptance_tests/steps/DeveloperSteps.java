package acceptance_tests.steps;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DeveloperSteps {

    DeveloperSteps() {


    }


    @Given("A project with ID {string} is created")
    public void aProjectWithIDIsCreated(String arg0) {
    }

    @When("The project with ID {string} is added to the system")
    public void theProjectWithIDIsAddedToTheSystem(String arg0) {
    }

    @Then("There is a project with ID {string} in the system")
    public void thereIsAProjectWithIDInTheSystem(String arg0) {
    }

    @When("the developer with ID {string} and name {string} is set as project leader for project with ID {string}")
    public void theDeveloperWithIDAndNameIsSetAsProjectLeaderForProjectWithID(String arg0, String arg1, String arg2) {
    }

    @Then("the project with ID {string} has the developer with ID {string} and name {string} as project leader")
    public void theProjectWithIDHasTheDeveloperWithIDAndNameAsProjectLeader(String arg0, String arg1, String arg2) {
    }

    @Then("The error message {string} is given")
    public void theErrorMessageIsGiven(String arg0) {
    }

    @Given("the following activities have been chosen for the project")
    public void theFollowingActivitiesHaveBeenChosenForTheProject() {
    }

    @When("A new project with ID {string} and and the given activities is created")
    public void aNewProjectWithIDAndAndTheGivenActivitiesIsCreated(String arg0) {
    }

    @Given("the developer with ID {string} and name {string} has {int} activities per week in the duration of the activity")
    public void theDeveloperWithIDAndNameHasActivitiesPerWeekInTheDurationOfTheActivity(String arg0, String arg1, int arg2) {
    }

    @When("project leader adds developer with ID {string} and name {string} to activity with name {string} BT {int} start week {int} and end week {int}")
    public void projectLeaderAddsDeveloperWithIDAndNameToActivityWithNameBTStartWeekAndEndWeek(String arg0, String arg1, String arg2, int arg3, int arg4, int arg5) {
    }

    @Then("the activity with name {string} BT {int} start week {int} and end week {int} contains the developer with ID {string} and name {string}")
    public void theActivityWithNameBTStartWeekAndEndWeekContainsTheDeveloperWithIDAndName(String arg0, int arg1, int arg2, int arg3, String arg4, String arg5) {
    }


    @When("A new project with ID {string} and name {string}, start date {int}\\/{int}\\/{int}, end date {int}\\/{int}\\/{int} and the given activities is created")
    public void aNewProjectWithIDAndNameStartDateEndDateAndTheGivenActivitiesIsCreated(String arg0, String arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7) {
    }

    @And("One or more of the activity start\\/end dates are not within the project start\\/end dates")
    public void oneOrMoreOfTheActivityStartEndDatesAreNotWithinTheProjectStartEndDates() {
    }


    @Given("The following developer\\(s) is\\/are registered in the system")
    public void theFollowingDeveloperSIsAreRegisteredInTheSystem() {
    }
}
