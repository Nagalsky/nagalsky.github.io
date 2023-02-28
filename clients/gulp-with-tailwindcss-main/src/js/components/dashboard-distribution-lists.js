function dashboardDistributionListsInit() {
  return {
    data: null,
    tableData: null,
    isLoading: false,
    activeTab: 0,

    async getDistributionLists() {
      await axios
        .get(watchListsFullApiUrl, getRequestHeaders())
        .then((res) => {
          this.data = res.data;
          if (this.activeTab === 0) {
            this.activeTab = this.data.length ? this.data[0].watchlistId : 0;
          }
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        });
    },

    async getWatchListRecipients(id) {
      if (!id) {
        return;
      }

      NProgress.start();

      this.isLoading = true;

      await axios
        .get(`${watchListRecipientsApiUrl}/${id}`, getRequestHeaders())
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

        async submitData(id) {
          this.loading = true;
          NProgress.start();

          let payload = {
            name: this.formData.name,
            email: this.formData.email,
          };

          await axios
            .post(
              `${watchListRecipientsApiUrl}/${id}`,
              payload,
              getRequestHeaders()
            )
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
        async onDelete(watchlistId, recieverId) {
          await axios
            .delete(
              `${watchListRecipientsApiUrl}/${recieverId}`,
              getRequestHeaders()
            )
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
        async onEdit(watchlistId, recieverId, name, email) {
          let payload = {
            name: name,
            email: email,
          };

          await axios
            .patch(
              `${watchListRecipientsApiUrl}/${recieverId}`,
              payload,
              getRequestHeaders()
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
