package acceptance_tests;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;


@RunWith(Cucumber.class)
@CucumberOptions(features = "use_cases",
        plugin = { "pretty","json:target/cucumber-reports","html:target/cucumber-reports","report.PrettyReports:target/pretty-cucumber"},
        monochrome=true,
        snippets = SnippetType.CAMELCASE,
        glue = { "tests.acceptance_tests"}
        )
public class AcceptanceTest {

}
