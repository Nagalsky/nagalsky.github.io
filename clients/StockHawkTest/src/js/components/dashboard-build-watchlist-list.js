function dashboardWatchlistListInit() {
  return {
    listViewData: [],
    isLoading: false,

    listViewInit(data) {
      this.isLoading = true;
      if (!data.length) {
        this.isLoading = false;
        return;
      }

      setTimeout(() => {
        this.listViewData = data;
        this.isLoading = false;
      }, 10);
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
