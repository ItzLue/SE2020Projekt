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
  "error_message": "org.picocontainer.PicoCompositionException: Either the specified parameters do not match any of the following constructors: [private java.lang.System()]; OR the constructors were not accessible for \u0027java.lang.System\u0027\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:200)\n\tat org.picocontainer.injectors.ConstructorInjector.getGreediestSatisfiableConstructor(ConstructorInjector.java:110)\n\tat org.picocontainer.injectors.ConstructorInjector.access$100(ConstructorInjector.java:51)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:331)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:632)\n\tat org.picocontainer.parameters.BasicComponentParameter$1.resolveInstance(BasicComponentParameter.java:118)\n\tat org.picocontainer.parameters.ComponentParameter$1.resolveInstance(ComponentParameter.java:136)\n\tat org.picocontainer.injectors.SingleMemberInjector.getParameter(SingleMemberInjector.java:78)\n\tat org.picocontainer.injectors.ConstructorInjector$CtorAndAdapters.getParameterArguments(ConstructorInjector.java:309)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:335)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat io.cucumber.picocontainer.PicoFactory.getInstance(PicoFactory.java:47)\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:59)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
formatter.step({
  "name": "the developer with ID \"OLSM\" and first name \"Ole\" and last name \"Smith\" is in the system",
  "keyword": "Then "
});
formatter.match({
  "location": "acceptance_tests.steps.SystemSteps.theDeveloperWithIDAndFirstNameAndLastNameIsInTheSystem(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});