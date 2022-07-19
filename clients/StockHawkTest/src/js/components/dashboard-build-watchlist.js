function dashboardBuildWatchlistInit() {
  return {
    data: null,
    activeTab: 0,
    existingStocks: null,
    isLoading: false,
    tradeModalCard: null,

    initialData() {
      NProgress.start();

      axios
        .get(watchListsFullApiUrl, configHeaders)
        .then((res) => {
          this.data = res?.data;
          if (this.activeTab === 0) {
            this.activeTab = this.data.length ? this.data[0].watchlistId : 0;
          }
        })
        .finally(() => {
          NProgress.done();
        });
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

    deleteWatchlist(id) {
      this.isLoading = true;
      axios
        .delete(`${watchListsApiUrl}/${id}`, configHeaders)
        .then(() => {
          this.data = this.data.filter((el) => el.watchlistId !== id);
          this.initialData();
          this.getExistingStocks(id);
          if (this.activeTab !== 0) {
            this.activeTab = this.data.length ? this.data[0].watchlistId : 0;
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  };
}
