function dashboardDistributionListsInit() {
  return {
    tabs: null,
    tableData: null,
    isLoading: false,

    getDistributionLists() {
      axios
        .get(watchListsFullApiUrl, configHeaders)
        .then((res) => {
          this.tabs = res.data;
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        });
    },

    getWatchListRecipients(id) {
      NProgress.start();

      this.isLoading = true;

      axios
        .get(`${watchListRecipientsApiUrl}/${id}`, configHeaders)
        .then((res) => {
          this.tableData = res.data;
          this.isLoading = false;
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
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

          let payload = {
            name: this.formData.name,
            email: this.formData.email,
          };

          axios
            .post(`${watchListRecipientsApiUrl}/${id}`, payload, configHeaders)
            .then(() => {
              this.getWatchListRecipients(id);
              Toastify({
                text: "Recipient created successfully!",
                ...toastSuccessConfig,
              }).showToast();
            })
            .catch((err) => {
              Toastify({
                text: err?.response?.statusText,
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
          axios
            .delete(`${watchListRecipientsApiUrl}/${recieverId}`, configHeaders)
            .then(() => {
              Toastify({
                text: "Recipient was deleted successfully!",
                ...toastSuccessConfig,
              }).showToast();
              this.getWatchListRecipients(watchlistId);
            })
            .catch((err) => {
              Toastify({
                text: err?.response?.statusText,
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
        onEdit(watchlistId, recieverId, name, email) {
          let payload = {
            name: name,
            email: email,
          };

          axios
            .patch(
              `${watchListRecipientsApiUrl}/${recieverId}`,
              payload,
              configHeaders
            )
            .then(() => {
              Toastify({
                text: "Recipient was edited successfully!",
                ...toastSuccessConfig,
              }).showToast();
              this.getWatchListRecipients(watchlistId);
            })
            .catch((err) => {
              Toastify({
                text: err?.response?.statusText,
                ...toastDangerConfig,
              }).showToast();
            });
        },
      };
    },
  };
}
