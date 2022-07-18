const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1ODEyMzk3MiwiZXhwIjoxNjU4MjEwMzcyLCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.bSYb9hjel-HJ_DLdg56Vlpm3fht03FoEtg-4ZJEkQGZhWpWGCk9Tjbnf5nEjD2hLLz-2WrB_sftdCGNo4bXR3vdjS-MK02HvifqdoKL_DhSa0T6B_OeSvHQMztrd4afscVeWVVecftziHapn33psHv9Rn8xKO8PMDb2p82SsSRwuhDPd7AYeS-8Z__PdpllnDH5NaoTtEJeWS0QfEfZ6-JPnNFIq2D-wyfaELtaeszLB8umIj_AyW9JDGD6iIuKnHSp3eyRK9EoaktyXU9YBMuO1jmLEArCDj25wR2WE42w90fLoTzH6V8auqvxv3HTBaBNzeARXEiMyoTwsgTtxCA";

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
