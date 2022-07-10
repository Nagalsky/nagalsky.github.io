const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NzQzOTI1NywiZXhwIjoxNjU3NTI1NjU3LCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.ZqhE4XQ1i2XHJQyiFL_66l1wDtt-hHJQk4sNIw3VRr9CrXTcob7GHSDtgHmF-9PeIpyUuobEedhc5rSX91WACm-zwN_okwsFzHBsDAu2PjlpjJFFPJI_M5AMy0Akxaf8psxtDtE6HktBLn3OxRbtqqqPutM-_uAkZjyMFP8-SpdWKY594UsYqEGPVLSz82PCe80dDFqUYhkVvW2LjScqxFkhnqQHPGHt7Wh7BVmotZkI60FoXSWjHopAExGguEWqTJmUJrMoQ7Ie3Ke8CA4ntjxjlIgRtdQk_trZLWcx93rtsIyfFHtFqKEiMoeMuHZy-qMDojHMAzp5NITLYqU_Ag";

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
