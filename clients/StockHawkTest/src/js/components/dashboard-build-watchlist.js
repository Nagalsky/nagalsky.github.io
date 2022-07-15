function dashboardBuildWatchlistInit() {
  return {
    data: null,
    existingStocks: null,
    isLoading: false,
    tradeModalCard: null,

    initialData() {
      NProgress.start();

      axios
        .get(watchListsFullApiUrl, configHeaders)
        .then((res) => {
          this.data = res.data;
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

    getExistingStocks(id) {
      this.existingStocks = this.data.filter((el) => el.watchlistId === id);
    },

    editWatchListEntrie(id, data) {
      let payload = {
        Amount: parseFloat(data.amount),
        OpenPrice: parseFloat(data.openPrice),
        Comment: data.comment,
      };

      this.isLoading = true;

      axios
        .post(`${watchListEntriesApiUrl}/${id}`, payload, configHeaders)
        .then(() => {
          Toastify({
            text: "Entries was edited successfully!",
            ...toastSuccessConfig,
          }).showToast();
          this.initialData();
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    deleteWatchListEntrie(id) {
      this.isLoading = true;

      axios
        .delete(`${watchListEntriesApiUrl}/${id}`, configHeaders)
        .then(() => {
          this.tabContent.entries = this.tabContent.entries.filter(
            (el) => el.watchlistEntryId !== id
          );
          Toastify({
            text: "Entries was deleted successfully!",
            ...toastSuccessConfig,
          }).showToast();
          this.initialData();
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
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

    cardItemForTradeModal(card) {
      this.tradeModalCard = card;
    },
  };
}
