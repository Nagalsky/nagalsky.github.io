function dashboardWatchlistListInit() {
  return {
    listViewData: [],
    subListViewData: [],

    listViewInit(data) {
      if (!data.length) {
        return;
      }

      this.listViewData = [...data];
    },

    subListViewInit(data) {
      if (!data.length) {
        return;
      }

      this.subListViewData = [...data];
    },

    deleteWatchListEntrie(id) {
      axios
        .delete(`${watchListEntriesApiUrl}/${id}`, configHeaders)
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
  };
}
