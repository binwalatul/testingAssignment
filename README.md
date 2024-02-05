# testingAssignment


1. Identified a problem or inefficiency in a process related to quality or development, and implemented a
change to improve it

- Identified an issue with Dev/QA PRs where the code owners were not taking care of code quality, code indentation or unused variables etc convenced the dev lead and manager showed them how we can use  eslint and husky in the repos with a pre commit hook to trigger the lint on the changed files which later on resulted in much lesser issues/indentation problems when we added sonar in our repo.
- We were not running any tests against the PRs which was causing pipeline to get blocked, to fix this problem we introduced ephmerals and started running a bunch of smoke tests against the PR changes that gave us a better picture of what change will break exisiting functionalities or what change requires a QA to update the flow.
- Reduction of the manual repetative work using small test scripts created in playwright/postman collection when it comes to backend api testing that gives QA a randomly generated product instead of creating it again and again by manually changing the payloads.

2. Built or implemented new testing tools or frameworks

- Created a test framework for mobile and api automation using appium, webdriverIO and jest, integrated the api test in PR pipeline and added a stage to trigger the mobile automation tests in browserstack
- Created api automation framework using jest and axios
- Created Web automation framework using jest and puppeteer

3. Made changes to prevent defects from occurring or improve the quality before reaching the testing stage
- Added smoke tests in the PR builds so that we know what is getting broken by the changes not adding regression here as it increases the PR build time
- Added regression tests which will trigger when a PR is merged to an env to make sure E2Es flows/Business critical flows are working fine and QA can pick the task for testing
- Created automated tests that have more coverage for UI/API code to prevent issues getting into lower envs before QA gets assigned for a task
- Added E2E tests and added them to lower evns to make sure once the PR is merged the E2E flow is not 