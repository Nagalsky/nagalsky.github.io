axios.interceptors.response.use(
  function (response) {
    isCustomer();
    return response;
  },

  function (error) {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = "/login.html";
    }

    return Promise.reject(error);
  }
);
