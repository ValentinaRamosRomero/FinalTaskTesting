import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import assert from "assert";

describe("Login Form Tests", () => {
  const testCases = [
    {
      id: "UC-1",
      username: "",
      password: "",
      expectedError: "Username is required",
    },
    {
      id: "UC-2",
      username: "testuser",
      password: "",
      expectedError: "Password is required",
    },
    {
      id: "UC-3",
      username: "standard_user",
      password: "secret_sauce",
      expectedTitle: "Products",
    },
  ];

  testCases.forEach(
    ({ id, username, password, expectedError, expectedTitle }) => {
      it(`should validate login case ${id}`, async () => {
        console.log(`Running test: ${id}`);
        await LoginPage.open();
        await LoginPage.login(username, password);

        if (id === "UC-1" || id === "UC-2") {
          const errorText = await LoginPage.getErrorMessage();
          assert(
            errorText.includes(expectedError),
            `Test ${id} Failed: Expected error message "${expectedError}", but got "${errorText}"`
          );
          console.log(`Test ${id} Passed: Correct error message displayed.`);
        }

        if (id === "UC-3") {
          await browser.waitUntil(
            async () => (await SecurePage.getPageTitle()) === expectedTitle,
            {
              timeout: 5000,
              timeoutMsg: `Expected page title to be "${expectedTitle}"`,
            }
          );

          const actualTitle = await SecurePage.getPageTitle();
          console.log(`Actual title is: "${actualTitle}"`);

          assert.strictEqual(
            actualTitle,
            expectedTitle,
            `Test ${id} Failed: Expected page title "${expectedTitle}", but got "${actualTitle}"`
          );

          console.log(`Test ${id} Passed: Page title is correct.`);
        }
      });
    }
  );
});
