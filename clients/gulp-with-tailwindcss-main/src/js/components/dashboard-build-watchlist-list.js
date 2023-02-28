function dashboardWatchlistListInit() {
  return {
    listViewData: [],

    listViewInit(data) {
      if (!data.length) {
        return;
      }

      this.listViewData = data;

      this.sortableList();
    },

    async deleteWatchListEntrie(id) {
      await axios
        .delete(`${watchListEntriesApiUrl}/${id}`, getRequestHeaders())
        .then(() => {
          this.listViewData = this.listViewData.filter(
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
        });
    },

    async deleteTrade(id) {
      this.isLoading = true;
      await axios
        .delete(`${watchListPositionsApiUrl}/${id}`, getRequestHeaders())
        .then(() => {
          this.table.positions = this.table.positions.filter(
            (el) => el.positionId !== id
          );
        })
        .finally(() => {
          this.isLoading = false;
        });
    },

    async sortableList() {
      const parent = this.$refs.sortable;

      if (!isTouchScreendevice()) {
        if (this.listViewData.length > 1) {
          await new Sortable(this.$refs.sortable, {
            animation: 500,
            filter: ".non-sortable",
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
    },
  };
}
