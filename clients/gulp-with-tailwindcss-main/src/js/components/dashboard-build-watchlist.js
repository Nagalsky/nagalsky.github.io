function dashboardBuildWatchlistInit() {
  return {
    data: null,
    activeTab: 0,
    existingStocks: null,
    isLoading: false,
    tradeModalCard: null,
    watchlistIds: [],

    async initialData() {
      NProgress.start();

      await axios
        .get(watchListsFullApiUrl, getRequestHeaders())
        .then((res) => {
          this.data = res?.data;
          this.watchlistIds = this.data.map((item) => item.watchlistId);
        })
        .finally(() => {
          NProgress.done();
        });
    },

    getActiveTab() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const watchlistQuery = urlParams.get("watchlist");

      if (Object.values(this.watchlistIds).includes(+watchlistQuery)) {
        this.activeTab = +watchlistQuery;
      } else {
        this.activeTab = this.data[0].watchlistId || 0;
        this.removeUrlQuery();
      }
    },

    getExistingStocks(id) {
      if (!id) {
        return;
      }
      this.existingStocks = this.data.filter((el) => el.watchlistId === id);
    },

    cardItemForTradeModal(card) {
      this.tradeModalCard = card;
    },

    async deleteWatchlist(id) {
      this.isLoading = true;
      this.removeUrlQuery();
      await axios
        .delete(`${watchListsApiUrl}/${id}`, getRequestHeaders())
        .then(() => {
          this.data = this.data.filter((el) => el.watchlistId !== id);
          this.initialData();
        })
        .then(() => {
          this.activeTab = this.data.length ? this.data[0].watchlistId : 0;
          this.getExistingStocks(id);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    removeUrlQuery() {
      const url = new URL(location);
      url.search = "";
      history.replaceState(null, null, url);
    },

    async editWatchlist(id, name) {
      let payload = {
        Name: name,
      };

      this.isLoading = true;
      await axios
        .put(`${watchListsApiUrl}/${id}`, payload, getRequestHeaders())
        .then(() => {
          this.initialData();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    async editWatchListEntrieAmount(id, data) {
      let amout = "" + data.amount;
      amout.replace(/^(-)|[^0-9.,]+/g, "$1");

      const payload = {
        Amount: parseFloat(amout),
      };

      this.isLoading = true;

      await axios
        .put(`${watchListEntriesApiUrl}/${id}`, payload, getRequestHeaders())
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

    async editWatchListEntrieOpenPrice(id, data) {
      let openPrice = "" + data.openPrice;
      openPrice.replace(/^(-)|[^0-9.,]+/g, "$1");

      const payload = {
        OpenPrice: parseFloat(openPrice),
      };

      this.isLoading = true;

      await axios
        .put(`${watchListEntriesApiUrl}/${id}`, payload, getRequestHeaders())
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

    async editWatchListEntrieComment(id, data) {
      let payload = {
        Comment: data.comment,
      };

      this.isLoading = true;

      await axios
        .put(`${watchListEntriesApiUrl}/${id}`, payload, getRequestHeaders())
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

    async setPreferredOrder(val, id) {
      let payload = {
        WatchlistSortOrder: +val,
      };

      await axios
        .put(`${watchListsApiUrl}/${id}`, payload, getRequestHeaders())
        .then(() => {
          Toastify({
            text: "Preferred order was updated successfully!",
            ...toastSuccessConfig,
          }).showToast();
          this.initialData();
        });
    },

    async setSummaryUpdateFrequency(val, id) {
      let payload = {
        SummaryUpdateFrequency: +val,
      };

      await axios
        .put(`${watchListsApiUrl}/${id}`, payload, getRequestHeaders())
        .then(() => {
          Toastify({
            text: "Summary update frequency was updated successfully!",
            ...toastSuccessConfig,
          }).showToast();
          this.initialData();
          this.initialData();
        });
    },

    openAmoutMask() {
      new Cleave(this.$refs.inputAmountMask, {
        numeral: true,
        numeralDecimalMark: "",
        delimiter: "",
      });
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
