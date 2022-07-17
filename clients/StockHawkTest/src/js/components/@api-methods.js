const bearerToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1ODAzNzExMiwiZXhwIjoxNjU4MTIzNTEyLCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.qhPA_GUV08otIVFOAkXD2MjV92-gsjF5w9H6JdGCf3Ctrf8NF4uUAhhwIoYnapM9mrnabXS11a3QXuACJl__bP8QKydNW3Ws7_0PAUZ5ln1YApvT9N5HGBJxbgP1_ZHNHclxyeqpJ3xYSc5GDIkNTzLbTUoVDjQg2FnvWr3R6rfJ4vI8YyHHs67npQqbUMCgpYZHUvyO3fkL-WUtxBdrjKythaeP4zo5Hfai21erMS7dw9CG-mlI27XeU1eXpu9tBvT34XEEK6xxpD6DIojbDmCS8hUvhnXK0a6EzX0v_x2OUtzmy3NkJYd6jCyXz5sFhcY9FUKqrYJwjPqY3WGVOQ";

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
