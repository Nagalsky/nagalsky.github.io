function dashboardBuildWatchlistInit() {
  return {
    data: null,
    existingStocks: null,
    isLoading: false,

    getData() {
      NProgress.start();
      fetch(watchListsFullApiUrl, requestGetOptions)
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
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

    getExistingStocks(id) {
      this.existingStocks = this.data.filter((el) => el.watchlistId === id);
    },

    editWatchListEntrie(id, data) {
      let raw = JSON.stringify({
        Amount: parseFloat(data.amount),
        OpenPrice: parseFloat(data.openPrice),
        Comment: data.comment,
      });

      const requestOptions = Object.assign(requestPutOptions, {
        body: raw,
      });

      this.isLoading = true;

      fetch(`${watchListEntriesApiUrl}/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          if (!result) {
            Toastify({
              text: "Entries was edited successfully!",
              ...toastSuccessConfig,
            }).showToast();
            this.getData();
          } else {
            const error = JSON.parse(result);
            Toastify({
              text: error.title,
              ...toastDangerConfig,
            }).showToast();
          }
        })
        .catch((err) => {
          Toastify({
            text: err,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    deleteWatchListEntrie(id) {
      this.isLoading = true;
      fetch(`${watchListEntriesApiUrl}/${id}`, requestDeleteOptions)
        .then((res) => res.text())
        .then(() => {
          this.tabContent.entries = this.tabContent.entries.filter(
            (el) => el.watchlistEntryId !== id
          );
          Toastify({
            text: "Entries was deleted successfully!",
            ...toastSuccessConfig,
          }).showToast();
          this.getData();
        })
        .catch((err) => {
          Toastify({
            text: err,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    amountMask(input) {
      let res = input.replace(/[^\d.]+/g, "");
      return res;
    },

    openPriceMask() {
      new Cleave(this.$refs.inputPriceMask, {
        numeral: true,
        numeralDecimalMark: ".",
        delimiter: ",",
      });
    },
  };
}