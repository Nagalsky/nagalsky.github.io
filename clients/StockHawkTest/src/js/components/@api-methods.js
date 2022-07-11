const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NzUyNjIzNywiZXhwIjoxNjU3NjEyNjM3LCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.GL3eu93PtW_6F76Mh09_lKwjqGTdGlWr5S1uy4Vja2_xP1rZVgBB47FplfYnTy5OZ5j_Yk2qhSx6j71NVNudvqAJ5fgigVDUfkzT3VfY5Mkv0zFuP4LbcHU0C7JVOuOD1ux2nHxkWsOjP0OJDczDEjMFL50Be-gnVtA1o5yyF4UHlP3W4avlgKYz7YPT3G0azJ-q7hs1UxbPJj0RzsZXufkrZLCgdl8zEZJlCwQQFncPBB0wXKNpTsmI9mvB7RYlZF0g2PclQf2c-qVJ0vub-8IiHSHbvjNvp7JItHBBi2W7wXsKf0eb1mM8JJl9csBdCVM2RTc7mxraxr1UTVeZUA";

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
