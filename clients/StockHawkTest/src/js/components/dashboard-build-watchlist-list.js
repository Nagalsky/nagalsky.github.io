function dashboardWatchlistListInit() {
  return {
    listViewData: [],

    listViewInit(data) {
      if (!data) {
        return;
      }

      this.listViewData = [...data];
    },
  };
}
