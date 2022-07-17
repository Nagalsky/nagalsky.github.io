function dashboardWatchlistCardsInit() {
  return {
    cardViewData: [],

    cardViewInit(data) {
      if (!data) {
        return;
      }

      this.cardViewData = [...data];
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

    editWatchListEntrieComment(id, data) {
      let payload = {
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
  };
}
