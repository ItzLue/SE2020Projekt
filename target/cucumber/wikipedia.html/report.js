$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:use_cases/provided/add_medium.feature");
formatter.feature({
  "name": "Add Medium",
  "description": "\tDescription: A medium (a book or CD) is added to the library\n\tActors: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a book successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a book with title \"Extreme Programming\", author \"Kent Beck\", and signature \"Beck99\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.thereIsABookWithTitleAuthorAndSignature(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is not in the library",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookIsNotInTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is added to the library",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookIsAddedToTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with title \"Extreme Programming\", author \"Kent Beck\", and signature \"Beck99\" is contained in the library",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookWithTitleAuthorAndSignatureIsContainedInTheLibrary(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a book when the adminstrator is not logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a book with title \"Extreme Programming\", author \"Kent Beck\", and signature \"Beck99\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.thereIsABookWithTitleAuthorAndSignature(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is added to the library",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookIsAddedToTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Administrator login required\" is given",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a CD successfully",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a Cd with title \"The Life of Brian\", author \"Monty Python\", and signature \"Mon79\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.thereIsACdWithTitleAuthorAndSignature(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Cd is added to the library",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theCdIsAddedToTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Cd with title \"The Life of Brian\", author \"Monty Python\", and signature \"Mon79\" is contained in the library",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theCdWithTitleAuthorAndSignatureIsContainedInTheLibrary(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/admin_login.feature");
formatter.feature({
  "name": "Admin login",
  "description": "\tDescription: The administrator logs into the library system and also logs out\n\tActor: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Administrator can login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the password is \"adminadmin\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thePasswordIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator login succeeds",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLoginSucceeds()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the adminstrator is logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdminstratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Administrator has the wrong password",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the password is \"wrong password\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thePasswordIs(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator login fails",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLoginFails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator is not logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/admin_logout.feature");
formatter.feature({
  "name": "Admin logout",
  "description": "\tDescription: The administrator logs out from the library system\n\tActor: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Administrator logs out",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/borrow_book.feature");
formatter.feature({
  "name": "Borrow Book",
  "description": "\tDescription: The user borrows a book\n\tActors: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User borrows book",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a book with signature \"Beck99\" is in the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aBookWithSignatureIsInTheLibrary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user borrows the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserBorrowsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is borrowed by the user",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookIsBorrowedByTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User borrows book more than 10 books",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has borrowed 10 books",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserHasBorrowedBooks(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a book with signature \"Beck99\" is in the library",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aBookWithSignatureIsInTheLibrary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user borrows the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserBorrowsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is not borrowed by the user",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookIsNotBorrowedByTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Can\u0027t borrow more than 10 books/CDs\" is given",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot borrow books if he has overdue books",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a book with signature \"Beck99\" is in the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aBookWithSignatureIsInTheLibrary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a book with signature \"Rose11\" is in the library",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aBookWithSignatureIsInTheLibrary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user borrows the book with signature \"Beck99\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserBorrowsTheBookWithSignature(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "29 days have passed",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.TimeSteps.daysHavePassed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user borrows the book with signature \"Rose11\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserBorrowsTheBookWithSignature(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with signature \"Rose11\" is not borrowed by the user",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookWithSignatureIsNotBorrowedByTheUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Can\u0027t borrow book/CD if user has overdue books/CDs\" is given",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot borrow books if he has outstanding fines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a book with signature \"Beck99\" is in the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aBookWithSignatureIsInTheLibrary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a book with signature \"Rose11\" is in the library",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aBookWithSignatureIsInTheLibrary(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user borrows the book with signature \"Beck99\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserBorrowsTheBookWithSignature(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "29 days have passed",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.TimeSteps.daysHavePassed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 100 DKK",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user returns the book with signature \"Beck99\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserReturnsTheBookWithSignature(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 100 DKK",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user borrows the book with signature \"Rose11\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserBorrowsTheBookWithSignature(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with signature \"Rose11\" is not borrowed by the user",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookWithSignatureIsNotBorrowedByTheUser(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Can\u0027t borrow book/CD if user has outstanding fines\" is given",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/overdue_book.feature");
formatter.feature({
  "name": "Overdue book",
  "description": "\tDescription: Contains the business rules when a book is overdue\n\t\tThis is more a feature describing a business rule then a \n\t\tuse case, but Cucumber scenarios can also be used here as\n\t\tthese business rules are given and must be read by\n\t\tdomain experts",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Overdue book after 29 days",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has borrowed a book",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserHasBorrowedABook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay no fine",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayNoFine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "29 days have passed",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.TimeSteps.daysHavePassed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has overdue books",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasOverdueBooks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 100 DKK",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Not overdue book if books was borrowed less than or equal 28 days",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has borrowed a book",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserHasBorrowedABook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "28 days have passed",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.TimeSteps.daysHavePassed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has no overdue books",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasNoOverdueBooks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay no fine",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayNoFine()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Overdue CD after only 8 days",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has borrowed a CD",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserHasBorrowedACD()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay no fine",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayNoFine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "8 days have passed",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.TimeSteps.daysHavePassed(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has overdue CDs",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasOverdueCDs()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 200 DKK",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/pay_fine.feature");
formatter.feature({
  "name": "Pay fine",
  "description": "\tDescription: The user pays his fines\n\tActors: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Pay fine for overdue books",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user has an overdue book",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aUserHasAnOverdueBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 100 DKK",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user returns the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserReturnsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user pays 100 DKK",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserPaysDKK(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can borrow books again",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserCanBorrowBooksAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay no fine",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayNoFine()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay fine and then the user has another book which is overdue",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user has an overdue book",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aUserHasAnOverdueBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 100 DKK",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user returns the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserReturnsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user pays 100 DKK",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserPaysDKK(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can borrow books again",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserCanBorrowBooksAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has another overdue book",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserHasAnotherOverdueBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 100 DKK",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user returns the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserReturnsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user pays 100 DKK",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserPaysDKK(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can borrow books again",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserCanBorrowBooksAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay no fine",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayNoFine()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pay partial fine for overdue books",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user has an overdue book",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.aUserHasAnOverdueBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 100 DKK",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user returns the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserReturnsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user pays 50 DKK",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserPaysDKK(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user cannot borrow books",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserCannotBorrowBooks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine of 50 DKK",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayAFineOfDKK(double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user pays 50 DKK",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserPaysDKK(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can borrow books again",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserCanBorrowBooksAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay no fine",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasToPayNoFine()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/register_user.feature");
formatter.feature({
  "name": "Register user",
  "description": "\tDescription: The administrator registers a user of the library\n\tActors: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register a user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a user with CPR \"020563-4886\", name \"Helena M. Bertelsen\", e-mail \"HelenaMBertelsen@rhyta.com \"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.thereIsAUserWithCPRNameEMail(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has address street \"Slåenhaven 50\", post code 4560, and city \"Vig\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasAddressWithStreetPostCodeAndCity(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator registers the user",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorRegistersTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is a registered user of the library",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserIsARegisteredUserOfTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register a user when not the administrator",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a user with CPR \"020563-4886\", name \"Helena M. Bertelsen\", e-mail \"HelenaMBertelsen@rhyta.com \"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.thereIsAUserWithCPRNameEMail(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has address street \"Slåenhaven 50\", post code 4560, and city \"Vig\"",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserHasAddressWithStreetPostCodeAndCity(java.lang.String,int,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator registers the user",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorRegistersTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Administrator login required\" is given",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register a user that is already registered",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator registers the user again",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorRegistersTheUserAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"User is already registered\" is given",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/return_book.feature");
formatter.feature({
  "name": "Return Book",
  "description": "\tDescriptions: The user returns a book\n\tActors: User",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A user returns a borrowed book",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the user has borrowed a book",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.thatTheUserHasBorrowedABook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user returns the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserReturnsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is not borrowed by the user",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookIsNotBorrowedByTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A user returns a book he hasn\u0027t borrowed",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the user has not borrowed the book",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.thatTheUserHasNotBorrowedTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user returns the book",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserReturnsTheBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book is not borrowed by the user",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookIsNotBorrowedByTheUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"book/CD is not borrowed by the user\" is given",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/search_book.feature");
formatter.feature({
  "name": "Search books",
  "description": "\tDescription: A user (either an ordinary user or the administrator) searches for books by \n\t\t\t\t providing a substring of either the title, author, or signature field\n\tActors: user",
  "keyword": "Feature"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003cjava.lang.String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching for a substring of the signature",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user searches for the text \"99\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserSearchesForTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with signature \"Beck99\" is found",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookWithSignatureIsFound(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003cjava.lang.String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching for a substring of the title",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user searches for the text \"Extreme\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserSearchesForTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with signature \"Beck99\" is found",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookWithSignatureIsFound(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003cjava.lang.String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching for a substring of the author",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user searches for the text \"Seb\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserSearchesForTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with signature \"Rose11\" is found",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookWithSignatureIsFound(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003cjava.lang.String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Searching also works when the administrator is logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user searches for the text \"Seb\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserSearchesForTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the book with signature \"Rose11\" is found",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBookWithSignatureIsFound(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003cjava.lang.String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "No books match the criteria",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user searches for the text \"Ian\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserSearchesForTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no book is found",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.noBookIsFound()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "The library has a set of books",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "these books are contained in the library",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theseBooksAreContainedInTheLibrary(java.util.List\u003cjava.util.List\u003cjava.lang.String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Find more than one book",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user searches for the text \"Beck\"",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserSearchesForTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the books with signatures \"Beck99\" and \"Beck02\" are found",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theBooksWithSignaturesAndAreFound(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/send_reminder.feature");
formatter.feature({
  "name": "Send reminder",
  "description": "\tDescription: Send an e-mail to all users with overdue books\n\tActors: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Send reminder e-mail",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a user with one overdue book",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.thereIsAUserWithOneOverdueBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator sends a reminder e-mail",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.EMailSteps.theAdministratorSendsAReminderEMail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "then the user receives an email with subject \"Overdue book(s)/CD(s)\" and text \"You have 1 overdue book(s)/CD(s)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.EMailSteps.thenTheUserReceivesAnEmailWithSubjectAndText(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "The administrator is not logged in",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is a user with one overdue book",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.thereIsAUserWithOneOverdueBook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator logs out",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.theAdministratorLogsOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator sends a reminder e-mail",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.EMailSteps.theAdministratorSendsAReminderEMail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Administrator login required\" is given",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:use_cases/provided/unregister_user.feature");
formatter.feature({
  "name": "Unregister user",
  "description": "\tDescription: The administrator unregisters a user from the library\n\tActors: Administrator",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Unregister a user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator unregisters that user",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorUnregistersThatUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is not registered with the library",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserIsNotRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Need to be administrator to unregister a user",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is not logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsNotLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator unregisters that user",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorUnregistersThatUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is still registered with the library",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserIsStillRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Administrator login required\" is given",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Can\u0027t unregister a user that is not registered",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is not registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsNotRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator unregisters that user",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorUnregistersThatUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"User not registered\" is given",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Can\u0027t unregister a user which has borrowed books",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has borrowed a book",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserHasBorrowedABook()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator unregisters that user",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorUnregistersThatUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is still registered with the library",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserIsStillRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Can\u0027t unregister user: user has still borrowed books/CDs\" is given",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Can\u0027t unregister a user that has fines",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "a user is registered with the library",
  "keyword": "Given "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.aUserIsRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to pay a fine",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theUserHasToPayAFine()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that the administrator is logged in",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.LoginLogoutSteps.thatTheAdministratorIsLoggedIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the administrator unregisters that user",
  "keyword": "When "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theAdministratorUnregistersThatUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is still registered with the library",
  "keyword": "Then "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.UserSteps.theUserIsStillRegisteredWithTheLibrary()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message \"Can\u0027t unregister user: user has still fines to pay\" is given",
  "keyword": "And "
});
formatter.match({
  "location": "dtu.library.acceptance_tests.steps.MediumSteps.theErrorMessageIsGiven(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});