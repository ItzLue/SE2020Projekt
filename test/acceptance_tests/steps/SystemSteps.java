package acceptance_tests.steps;

import domain.Developer;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import static org.junit.Assert.assertTrue;
import System.App;

public class SystemSteps {


    private App app;
    private ErrorMessageHolder errorMessageHolder;
    private DeveloperHelper developerHelper;

    public SystemSteps(App app, ErrorMessageHolder errorMessageHolder, DeveloperHelper developerHelper) {
       this.app = app;
       this.errorMessageHolder = errorMessageHolder;
       this.developerHelper = developerHelper;
    }

    @When("the developer with first name {string} and last name {string} is added to the system")
    public void theDeveloperWithFirstNameAndLastNameIsAddedToTheSystem(String firstName, String lastName) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        developerHelper.setDeveloper(new Developer(firstName, lastName));
        app.registerDeveloper(developerHelper.getDeveloper());

        //throw new io.cucumber.java.PendingException();
    }

    @Then("the developer with ID {string} and first name {string} and last name {string} is in the system")
    public void theDeveloperWithIDAndFirstNameAndLastNameIsInTheSystem(String string, String string2, String string3) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        assertTrue(app.getDeveloperHM().containsKey(developerHelper.getDeveloper().getID()));
        //throw new io.cucumber.java.PendingException();
    }

//    @Given("The following developer\\(s) is\\/are registered in the system")
//    public void theFollowingDeveloperSIsAreRegisteredInTheSystem() {
//    }
//
//    @Given("A project with ID {string} is created")
//    public void aProjectWithIDIsCreated(String arg0) {
//    }
//
//    @When("The project with ID {string} is added to the system")
//    public void theProjectWithIDIsAddedToTheSystem(String arg0) {
//    }
//
//    @Then("There is a project with ID {string} in the system")
//    public void thereIsAProjectWithIDInTheSystem(String arg0) {
//    }
//
//    @When("the developer with ID {string} and name {string} is set as project leader for project with ID {string}")
//    public void theDeveloperWithIDAndNameIsSetAsProjectLeaderForProjectWithID(String arg0, String arg1, String arg2) {
//    }
//
//    @Then("the project with ID {string} has the developer with ID {string} and name {string} as project leader")
//    public void theProjectWithIDHasTheDeveloperWithIDAndNameAsProjectLeader(String arg0, String arg1, String arg2) {
//    }
//
//    @Then("The error message {string} is given")
//    public void theErrorMessageIsGiven(String arg0) {
//    }
}