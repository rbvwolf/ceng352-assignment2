# CENG352 - Software Verification and Validation course, Assignment 2 
## Automated Unit Tests using Github Actions
This project demonstrates the implementation of automated unit testing for a custom-developed login system. The system is built using HTML, CSS, and JavaScript, focusing on client-side validation and correctness of user input.

### Project Overview

The login interface includes the following input fields:

-First Name
-Last Name
-Email Address
-Password
-Password Confirmation

The primary goal of this project is to ensure that all user inputs are validated correctly and that the system behaves reliably under different scenarios.

### Testing Strategy

A total of 26 unit tests were designed and implemented to verify the functionality of the login system. The tests cover a wide range of validation cases, including:

-Empty or missing input fields
-Invalid email formats
-Password constraints (e.g., length, format)
-Password confirmation mismatch
-Edge cases and invalid user behavior

All test cases were executed successfully, and 100% of the tests passed, confirming that the system produces the expected outcomes.

### Continuous Integration (CI)

The project integrates automated testing using GitHub Actions. The CI pipeline is configured to:

-Automatically run all unit tests on each push or update
-Detect errors early in the development process
-Ensure that new changes do not break existing functionality

This approach improves software reliability and supports continuous quality assurance.

### Technologies Used
-HTML – Structure of the login page
-CSS – Styling and layout
-JavaScript – Input validation logic
-GitHub Actions – Automated testing and CI pipeline
Results:
-Total Tests: 26
-Passed Tests: 26
-Failed Tests: 0

The successful execution of all tests indicates that the login system is stable and behaves as expected under all tested conditions.

### Conclusion

This project highlights the importance of automated testing in modern software development. By integrating unit tests with a CI pipeline, we ensure continuous validation of system behavior, reduce the risk of bugs, and maintain high software quality—especially in critical components such as authentication systems.