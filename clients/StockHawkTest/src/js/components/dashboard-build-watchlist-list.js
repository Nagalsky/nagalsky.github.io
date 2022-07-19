function dashboardWatchlistListInit() {
  return {
    listViewData: [],
    subListViewData: [],

    listViewInit(data) {
      if (!data.length) {
        return;
      }

      this.listViewData = [...data];

      this.subListViewData = [...(this.listViewData[0].positions || [])];
    },
  };
}
