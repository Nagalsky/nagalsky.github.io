const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NzgxNzMyNywiZXhwIjoxNjU3OTAzNzI3LCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.H-_q3Z96oA-XoRIsfqQbJ-zWsg14IkaT6SHs9CduOGGCocyZfcliPQOT1x9apHEypsczHDQsZrOBC5jMwK5e3YW520gvGjzgkfI-62fBEtGBjt0AouchbcZ2105Dqjff46FfSFFhLUZsD8vx59Q9g9EDKi0MTokEWsxOmHW5JIQIS9SxrbwjnfLtrfjA7oPzcVBBH60aL3nHM4vt4u5wdtrAsIHag_h671QaUuFGvnOZUhcmk-n5J-h1Li1YmkX3hlFmWMDht8LelDO8Rf-EzyvY4PdpDSQLM6GbUP2Mqt290W4CpGbcoeHzscSHJA_hO-SmuwXabasftAI7Ky6Gig";

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
