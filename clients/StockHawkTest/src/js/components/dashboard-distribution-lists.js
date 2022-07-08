function dashboardDistributionListsInit() {
  return {
    tabs: null,
    tableData: null,
    isLoading: false,

    getDistributionLists() {
      fetch(watchListsFullApiUrl, requestGetOptions)
        .then((res) => res.json())
        .then((data) => {
          this.tabs = data;
        });
    },

    getWatchListRecipients(id) {
      NProgress.start();

      this.isLoading = true;

      fetch(`${watchListRecipientsApiUrl}/${id}`, requestGetOptions)
        .then((res) => res.json())
        .then((data) => {
          this.tableData = data;
          this.isLoading = false;
        })
        .catch((err) => {
          Toastify({
            text: err,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          NProgress.done();
        });
    },

    createWatchListRecipientForm() {
      return {
        loading: false,
        formData: {
          name: "",
          email: "",
        },

        submitData(id) {
          this.loading = true;
          NProgress.start();

          let raw = JSON.stringify({
            name: this.formData.name,
            email: this.formData.email,
          });

          const requestOptions = Object.assign(requestPostOptions, {
            body: raw,
          });

          fetch(`${watchListRecipientsApiUrl}/${id}`, requestOptions)
            .then((res) => res.text())
            .then(() => {
              this.getWatchListRecipients(id);
              Toastify({
                text: "Recipient created successfully!",
                ...toastSuccessConfig,
              }).showToast();
            })
            .catch((err) => {
              Toastify({
                text: err,
                ...toastDangerConfig,
              }).showToast();
            })
            .finally(() => {
              for (var key in this.formData) {
                delete this.formData[key];
              }
              this.loading = false;
            });
        },
      };
    },

    dataTable() {
      return {
        pagination: false,
        sorted: false,
        initData() {
          this.items = this.tableData;
        },
        isEmpty() {
          return this.tableData.length ? false : true;
        },
        onDelete(watchlistId, recieverId) {
          fetch(
            `${watchListRecipientsApiUrl}/${recieverId}`,
            requestDeleteOptions
          )
            .then((res) => res.text())
            .then(() => {
              Toastify({
                text: "Recipient was deleted successfully!",
                ...toastSuccessConfig,
              }).showToast();
              this.getWatchListRecipients(watchlistId);
            })
            .catch((err) => {
              Toastify({
                text: err,
                ...toastDangerConfig,
              }).showToast();
            });
        },
        onEdit(watchlistId, recieverId, name, email) {
          let raw = JSON.stringify({
            name: name,
            email: email,
          });

          const requestOptions = Object.assign(requestPatchOptions, {
            body: raw,
          });

          fetch(`${watchListRecipientsApiUrl}/${recieverId}`, requestOptions)
            .then((res) => res.text())
            .then(() => {
              Toastify({
                text: "Recipient was edited successfully!",
                ...toastSuccessConfig,
              }).showToast();
              this.getWatchListRecipients(watchlistId);
            })
            .catch((err) => {
              Toastify({
                text: err,
                ...toastDangerConfig,
              }).showToast();
            });
        },
      };
    },
  };
}
