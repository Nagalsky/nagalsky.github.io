function dashboardWatchlistCardsInit() {
  return {
    cardViewData: [],

    cardViewInit(data) {
      if (!data) {
        return;
      }

      this.cardViewData = data;

      this.sortableCards();
    },

    async deleteWatchListEntrie(id) {
      this.isLoading = true;

      await axios
        .delete(`${watchListEntriesApiUrl}/${id}`, getRequestHeaders())
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

    async deleteTrade(id) {
      this.isLoading = true;
      await axios
        .delete(`${watchListPositionsApiUrl}/${id}`, getRequestHeaders())
        .then(() => {
          this.card.positions = this.card.positions.filter(
            (el) => el.positionId !== id
          );
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    sortableCards() {
      const parent = this.$refs.sortable;

      if (!isTouchScreendevice()) {
        if (this.cardViewData.length > 1) {
          if (parent) {
            new Sortable(parent, {
              animation: 500,
              handle: ".handle",
              onUpdate: () => {
                const items = parent.querySelectorAll(".sortableItem");

                const itemsArr = [].slice.call(items);

                const payload = itemsArr.map((item, index) => ({
                  watchlistEntryId: item.getAttribute("data-watchlistEntryId"),
                  sortRank: index + 1,
                }));

                NProgress.start();

                axios
                  .post(
                    watchListEntriesSortorderApiUrl,
                    payload,
                    getRequestHeaders()
                  )
                  .then(() => {
                    this.orderDafault = 1;
                    let payload = {
                      WatchlistSortOrder: 1,
                    };

                    axios.put(
                      `${watchListsApiUrl}/${this.activeTab}`,
                      payload,
                      getRequestHeaders()
                    );
                  })
                  .finally(() => {
                    NProgress.done();
                  });
              },
            });
          }
        }
      }
    },
  };
}
