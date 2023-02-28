function dailyReports() {
  return {
    reportData: null,
    isReportLoading: false,
    isEditReportBtnDisabled: true,

    async getReport(watchlistId) {
      const queryString = window.location.pathname;

      if (queryString.includes("members")) {
        if (!watchlistId) {
          return;
        }

        NProgress.start();
        this.isReportLoading = true;

        await axios
          .get(`${memberReportApiUrl}/${watchlistId}`, getRequestHeaders())
          .then((res) => {
            this.reportData = res?.data;
          })
          .finally(() => {
            NProgress.done();
            this.isReportLoading = false;
            this.isEditReportBtnDisabled = false;
          });
      } else {
        NProgress.start();
        this.isReportLoading = true;

        await axios
          .get(sampleReportApiUrl)
          .then((res) => {
            this.reportData = res?.data;
          })
          .finally(() => {
            NProgress.done();
            this.isReportLoading = false;
            this.isEditReportBtnDisabled = true;
          });
      }
    },
  };
}
