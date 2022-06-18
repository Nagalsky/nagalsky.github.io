(() => {
  const apiUrl = "https://www.stockhawk.io/api/subscriber";

  const bearerToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NTUzNTM0NiwiZXhwIjoxNjU1NjIxNzQ2LCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.aqqCGU96rBrHokGdw_tgGuYHuXvSMn8F4GyE_nkMP5qZ39KhITzLSmKtWa-CtrcLHVKY5GUI9xsRT7blQ3tI04fOLT8m0nn-nc6G83_pTaFjaf7ptcvE2r2yJ558z3OL5y6nmU_pi6GWNriwYdcZNxgJlu8HK-vEZgg8ZMxfMuuznSwCWHw9Gu84MuZM3vjCnyxlW0c77fmRmNfQiihOzwp9qlXo1vLvsCaI6kLbkadcdfSDajeZB91Wht9V3KJqQddZ4TTcrBqzKTZ5yUL96pD4XjaDjlz61o53TvfgKTZ7Qo8c6s2hlFiLd-Ia44mARa-g46KXdy4YnoCCZvqn9w";

  const myHeaders = new Headers({
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/json",
    Cookie:
      "ApplicationGatewayAffinity=7a04715ad5252cab2e2e787b5376885f; ApplicationGatewayAffinityCORS=7a04715ad5252cab2e2e787b5376885f",
  });

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let isCustomer = null;

  fetch(`${apiUrl}`, requestOptions)
    .then((response) => response.text())
    .then((response) => {
      const data = JSON.parse(response);
      isCustomer = data.isCustomer;
      if (isCustomer === false) {
        $(".header-upgrade-btn").removeClass("hidden").show();
      } else {
        $(".header-upgrade-btn").addClass("hidden").hide();
      }
    })
    .catch((error) => error);
})();
