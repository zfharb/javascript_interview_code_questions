// alwasy refer to bigr.io strategy.

1) create smoke suite.
2) create regression suite.
3) do dry run until code freeze.
4) if there is bug, don;t open and ticket and tell developer to fix it.
5) create test cases during the dry run. 
6) add manual test cases to test cycles that will be run manually in every sprint.
7) add automated tests to CI.
8) after code freeze. Run all the test cases manually and report bugs through jira tickets. 
9) create suite of tests that can't be automated like the look and feel of the application.
10) create a set of tests that are release critical which runs before each release.
11) add perfomance and load testing, security testing, and accessbility testing. 
12) label jira test cases either manual or automation or manual-release-critical.
13) If there is a pre-release branch to be merged with qa or staging or production, might need to pick few E2E test cases and run them manually.


// what goes in a test script file

1) setup
2) tear down







