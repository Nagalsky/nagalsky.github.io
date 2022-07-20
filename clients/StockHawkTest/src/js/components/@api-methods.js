const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1ODMwMzk5OCwiZXhwIjoxNjU4MzkwMzk4LCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.tCQ0ZOl_oxu1ABn0y_Mh5MQvVXhSyoV-W3X8bRTutDeTmp9k0Khj7OUhlSk5S_kwSkL53i9GH1wUZGsurTM9J1ZQM951t4wfxu5lD9wbJox3S2rGrGuDQySs-4lnhasnkb_gZsSQ0XH59EbAU90FDxXORt5RZWdtRYM3bZhVlZUAe1yMUxhgKavceR8WFrnrBgaRhmRxZVlLlG4FJnkuv8jV4txHDE4H4CzMrVC2bM98ighvXDkKVO6CJzG9iWlSm84iUeLAGjoTtlg-_8AIb3ZqeNqu0O9OgWqTX1CSKbj31WcJwMW-rRucErDnuFbOe5hEILVC33FcxQMx9gD9Ow";

const configHeaders = {
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    "Content-Type": "application/json",
  },
};

// axios.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Do something with response error
//     if (error.response.status === 401) {
//       console.log("Unauthorized Request");
//     }
//     return Promise.reject(error);
//   }
// );
