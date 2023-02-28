function dashboardDailyStockSummary() {
  return {
    data: null,
    activeTab: 0,
    isFirstLogin: false,
    selectedStocks: null,
    watchlistIds: [],

    initDailyStockSummary() {
      this.isFirstLogin = JSON.parse(localStorage.getItem("isFirstLogin"));

      if (this.isFirstLogin)
      {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        'event': 'subscriberSignup'
        });
        //alert('triggered subscriberSignup');
      };

      this.selectedStocks = localStorage.getItem("selectedStocks") || null;
      this.getWatchlists();
    },

    async getWatchlists() {
      await axios.get(watchListsFullApiUrl, getRequestHeaders()).then((res) => {
        this.data = res?.data;
        this.watchlistIds = this.data.map((item) => item.watchlistId);
        this.getActiveTab();
        this.getLogic();
      });
    },

    getActiveTab() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const watchlistQuery = urlParams.get("watchlist");

      if (!this.data.length) {
        return;
      }

      if (Object.values(this.watchlistIds).includes(+watchlistQuery)) {
        this.activeTab = +watchlistQuery;
      } else {
        this.activeTab = this.data[0].watchlistId || 0;
        this.removeUrlQuery();
      }
    },

    removeUrlQuery() {
      const url = new URL(location);
      url.search = "";
      history.replaceState(null, null, url);
    },

    getLogic() {
      if (!this.watchlistIds.length && Boolean(this.selectedStocks)) {
        this.createWatchlists();
        return;
      }
      if (
        this.watchlistIds.length &&
        this.data.length &&
        Boolean(this.selectedStocks)
      ) {
        this.showModalUpdateWatchlist = true;
      }

      if (!this.watchlistIds.length && !Boolean(this.selectedStocks)) {
        this.showModalAddWatchlist = true;
      }
    },

    createWatchlists() {
      const selectedStocksArr = this.selectedStocks
        ? this.selectedStocks.split(",")
        : null;

      const selectedStocks =
        selectedStocksArr &&
        selectedStocksArr?.map((item) => ({
          instrumentId: item,
        }));

      const payload = {
        Name: "My new watchlist",
        Entries: selectedStocks,
      };

      axios
        .post(watchListsFullApiUrl, payload, getRequestHeaders())
        .then(() => {
          localStorage.setItem("isFirstLogin", false);
          localStorage.removeItem("selectedStocks");
          this.initDailyStockSummary();
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        });
    },
  };
}
