const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NzI3MTU4OCwiZXhwIjoxNjU3MzU3OTg4LCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.aTfZN9Z2NeqCQ1kW69RJGpGF0LL3VxvjUBQyFJrNwhq5Ta0RWTlx9xm73n7gNqQBG-6wNf10EoAMaGMA-MMJUT85D-dEUHD7bkXzjjeNACVS6nqKux-nJ_lS-D4LuiiH8T4QSfCpr1UzgOzznR3FFSuJmrGRTCN8EzNIjq1REbJPIJVoFZ3lCV7TYHDOCY_lr6BONwYsBhDelHmIlVMGdt1BZ5tVeQmlmADSrEosm0guB29ul8C30i2XUvymawu1SEvUwSxCapBpF_b7Uf_gq9jEt5ZpwlFH0gSrRPQup-pF_Tfb6o0EUByHdEoxLSIiCaXuKd_E3H9R1Z4I1X-ktQ";

const myHeaders = new Headers({
  Authorization: `Bearer ${bearerToken}`,
  "Content-Type": "application/json",
  Cookie:
    "ApplicationGatewayAffinity=7a04715ad5252cab2e2e787b5376885f; ApplicationGatewayAffinityCORS=7a04715ad5252cab2e2e787b5376885f",
});

const requestGetOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
const requestDeleteOptions = {
  method: "DELETE",
  headers: myHeaders,
  redirect: "follow",
};
const requestPatchOptions = {
  method: "PATCH",
  headers: myHeaders,
  redirect: "follow",
};
const requestPutOptions = {
  method: "PUT",
  headers: myHeaders,
  redirect: "follow",
};
const requestPostOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow",
};
