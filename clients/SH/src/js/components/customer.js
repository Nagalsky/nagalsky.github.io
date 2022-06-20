(() => {
  const apiUrl = "https://www.stockhawk.io/api/subscriber";

  const bearerToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NTYyNTM3MiwiZXhwIjoxNjU1NzExNzcyLCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.mhODqHdSi3UG2mN0AMuFxHmngySPhkJGQCLAc-i9fb221_MIZoBmPmDCexlGrX8oU4fmQ3xsCBEbbe2ESw_WybtCehsbKINiOgeApv--uZlJxidUdRASFEjhZpJSzFzIs61QOgM5QxVO3Z5A1Z5zYUOxB0aKdWmIU66dDmBQj7lJwNQJBzMPzq2GC6KrqBwDGSOS-uTrRaxRsTzlXybbPkhZE8Hg5fT8gcwvhZ8xtjFr7Il5TmVIdcXvBoAGeOPESSHnGkBgwZ7OKfN4DTRLL9hFwbCD7h4ayM77HNGMrYeS0fTgQR1gY2izf34lQw2N__ZQWWfWTEY9YN8gRFRQXg";

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
