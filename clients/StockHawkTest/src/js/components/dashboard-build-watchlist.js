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

    cardItemForTradeModal(card) {
      this.tradeModalCard = card;
    },
  };
}
