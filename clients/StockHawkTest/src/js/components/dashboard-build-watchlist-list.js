function dashboardWatchlistListInit() {
  return {
    listViewData: [],

    listViewInit(data) {
      if (!data.length) {
        return;
      }

      this.listViewData = [...data];
    },
  };
}
