(() => {
  const apiUrl = "https://www.stockhawk.io/api/subscriber";

  const bearerToken =
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZzVnFVQUFPSTlhT1NkdFpLdFVzTCJ9.eyJodHRwczovL3d3dy5zdG9ja2hhd2suaW8vZW1haWwiOiJuYWdhbHNreS5uaWtpdGFAZ21haWwuY29tIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zdG9ja2hhd2suaW8vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTIyNzI4NjE3MzExOTAzNzIzNzkiLCJhdWQiOlsiaHR0cHM6Ly93d3cuc3RvY2toYXdrLmlvIiwiaHR0cHM6Ly9kZXYtemgyaTBnZ2EudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NTQ0NzA2MCwiZXhwIjoxNjU1NTMzNDYwLCJhenAiOiJkWnJ2NFpZTUJjMEJDRXdhOVB4UTFLZ0hab213a2tiQiIsInNjb3BlIjoib3BlbmlkIGVtYWlsIHN0b2NraGF3azp1c2Ugb2ZmbGluZV9hY2Nlc3MifQ.UBx2FnRog7iLcI4F7p97gCVV8RtxPEVyRsgsGq43qM50rn9SoZSenxCEW5xD2HNZl5rrS3YRZ27WMpUgbfUFm9vW5KFMshSGxJgOcbr4Yhb96iKqy09-K3MrrjkqzDrSlKFuVLBSA6kLxXqT8boZ-bkGHqUmrjWTrHiNyHuP4k4EKaqImYVOo2wAztj_fvnTeaJdmMADOS8YywGhNOf7Iyz2_uFCN8hAsqBBdUoaKqMbDRYJf8wmP5F-0F8n91JNULENNZ6IJgZCw-n731Ks4nmWbpAN78in44waJGrPjUKjdYlUK6kmNP3Wi0a3Lwduqi4_ziUF7o_M2f1BwKU4Gw";

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
