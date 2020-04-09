package acceptance_tests;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(features = "use_cases",
	plugin = { "pretty"},
	monochrome=true, 
	snippets = SnippetType.CAMELCASE,
	glue = { "test.acceptance_tests"},
	strict = true)
public class AcceptanceTest {

}
