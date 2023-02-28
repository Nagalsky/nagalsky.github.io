function dashboardBuildWatchlistDeleteWatchlistModal() {
  return {
    submitButtonText: "Delete",

    async onDelete(id) {
      this.deleteWatchlist(id);
      this.showModalDeleteWatchlist = false;
    },
  };
}
