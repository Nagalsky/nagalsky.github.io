const isCustomer = () => {
  if (localStorage.getItem("customerCreated") === null) {
    return;
  }

  const now = moment(new Date());
  const end = moment(localStorage.getItem("customerCreated"));
  const duration = moment.duration(now.diff(end));

  const minutes = duration.asMinutes();

  const fetchData = {
    method: "GET",
    ...getRequestHeaders(),
  };

  if (minutes <= 10) {
    fetch(subscriberApiURL, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("customerType", data.customerType);
        localStorage.setItem("isCustomer", data.isCustomer);
      });
  }
};
