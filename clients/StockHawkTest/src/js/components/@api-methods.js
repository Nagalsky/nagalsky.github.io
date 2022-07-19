const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1ODIxMDg1MywiZXhwIjoxNjU4Mjk3MjUzLCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.INeKezSdny1kZpjh3DsxonV2jTznnhoyAlkz7cvdDmc4TrnfooYVRHqLNonFmc6NO42k1HBxVquUUHRUHK_VamK52Yqd5pPgrZeT-cgc2QVJQJubaQ8puxG1DJCIPJZs7cM7ZfFOwHSVFcWoxayuWCtdchASgHoSHqqRXemrmxyNkut7A7oZYFSgahh7YQ_jv9dg9EGdHiH6PYhWz_FV0vR90uVxpqPDhiL3vYPGXRdpgrYGu--vwflpGnWtUP9RAAogXV08r2PwIz1RUcVADtMQOm0ZCFBa15kfGPPvWwqSkL6qNxfBeROpRKmLnxl0yqOrerzeatv9bgsAky-GVw";

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
