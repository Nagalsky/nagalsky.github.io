// (() => {
//   const apiUrl = "https://www.stockhawk.io/api/subscribers";

//   const bearerToken =
//     "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NTM3NDI5MywiZXhwIjoxNjU1NDYwNjkzLCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.Lrm6RHt2SujJQpmQ3rvu6K3z_kP2CxtFOnRCOd7_DfqAorr1XPWG60nVpnm68MIdCQyzOb23DRc9jD7vsB-lYGT-jos4KQAYOOyGzolQyHDTR4J8CZ5WjhD30L-6Mn4xFRZnAo70lE33sdUc0FV_bv_3Nl4uHPP5J26bq1jBhxmPKKB0ySy263jk__UBRsnliGTX0HF3yV0LxGFL5jQEaGUUSMaYDWsVfPm2Mrl0scfv2BSEaRmZ_oXZqL7MdMIOyck2cI7Dn9jpmKkvxDpxa58W_-xNFKLtdjpMkRu8CLBNLsF4-LU1lpMnk-866NfAX5syDYRV--UCr6TJ5ZK_1w";

//   const myHeaders = new Headers({
//     Authorization: `Bearer ${bearerToken}`,
//     "Content-Type": "application/json",
//     Cookie:
//       "ApplicationGatewayAffinity=7a04715ad5252cab2e2e787b5376885f; ApplicationGatewayAffinityCORS=7a04715ad5252cab2e2e787b5376885f",
//   });

//   const requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };

//   fetch(`${apiUrl}`, requestOptions)
//     .then((response) => response.text())
//     .then((data) => {
//       console.log("data", data);
//     })
//     .catch((error) => error);
// })();
