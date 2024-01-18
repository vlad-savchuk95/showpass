Cypress.Commands.add(
    "userLogin",
    (
      userEmail = Cypress.env("userEmail"),
      userPassword = Cypress.env("userPassword")
    ) => {
      cy.request(
        "POST",
        "https://www.showpass.com/api/auth/login/",
        {
          email: userEmail,
          password: userPassword,
        },
      ).then((response) => {
          window.localStorage.setItem("token", response.body.token);
          cy.log(response)
      });
    },
  );
