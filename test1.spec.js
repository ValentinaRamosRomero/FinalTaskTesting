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
      expectedTitle: "Swag Labs",
    },
  ];

  testCases.forEach(
    ({ id, username, password, expectedError, expectedTitle }) => {
      it(`should validate login case ${id}`, async () => {
        console.log(`Running test: ${id}`);
        await browser.url("https://www.saucedemo.com/");

        const usernameInput = await $("#user-name");
        const passwordInput = await $("#password");
        const loginButton = await $("#login-button");

        await usernameInput.setValue(username);
        await passwordInput.setValue(password);

        if (id === "UC-1" || id === "UC-2") {
          if (id === "UC-1") {
            await usernameInput.clearValue();
            await passwordInput.clearValue();
          } else if (id === "UC-2") {
            await passwordInput.clearValue();
          }

          await loginButton.click();
          const errorMessage = await $(".error-message-container");
          const errorText = await errorMessage.getText();
          assert(
            errorText.includes(expectedError),
            `Test ${id} Failed: Expected error message "${expectedError}", but got "${errorText}"`
          );
          console.log(`Test ${id} Passed: Correct error message displayed.`);
        }

        if (id === "UC-3") {
          await loginButton.click();
          await browser.waitUntil(
            async () => (await browser.getTitle()) === expectedTitle,
            {
              timeout: 5000,
              timeoutMsg: `Expected title to be ${expectedTitle}`,
            }
          );
          const actualTitle = await browser.getTitle();
          assert.strictEqual(
            actualTitle,
            expectedTitle,
            `Test ${id} Failed: Expected title "${expectedTitle}", but got "${actualTitle}"`
          );
          console.log(`Test ${id} Passed: Title is correct.`);
        }
      });
    }
  );
});
