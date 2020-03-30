package acceptance_tests.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DeveloperSteps {
    @Given("The following developer\\(s) is\\/are registered in the system")
    public void theFollowingDeveloperSIsAreRegisteredInTheSystem() {
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
}
