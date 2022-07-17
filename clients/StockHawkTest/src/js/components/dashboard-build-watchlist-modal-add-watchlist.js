function addWatchListModal() {
  return {
    watchlistName: "",
    isWatchlistCreated: false,
    search: "",
    instruments: [],
    selectedInstruments: [],
    watchlistId: null,
    noInstruments: false,
    isLoading: false,
    submitButtonText: "Save",

    createWatchList() {
      if (this.watchlistName === "") {
        return;
      }

      const payload = {
        Name: this.watchlistName.trim(),
      };

      NProgress.start();

      this.isLoading = true;
      this.submitButtonText = `<span class="flex items-center space-x-4"
        ><svg
          class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path></svg
        >Processing...</span>`;

      axios
        .post(`${watchListsApiUrl}`, payload, configHeaders)
        .then((res) => {
          this.isWatchlistCreated = true;
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          NProgress.done();
          this.isLoading = false;
          this.submitButtonText = "Save";
        });
    },

    fetchInstruments() {
      if (this.search === "") {
        this.instruments = [];
        this.noInstruments = false;
        return;
      }

      NProgress.start();

      axios
        .get(`${instrumentsApiURL}/${this.search}`)
        .then((res) => {
          !res.data.length
            ? (this.noInstruments = true)
            : (this.noInstruments = false);

          this.instruments = res.data;

          this.instruments = this.instruments.filter(
            (arr1) =>
              !this.selectedInstruments.some(
                (arr2) => arr1.instrumentId === arr2.instrumentId
              )
          );
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          NProgress.done();
        });
    },

    selectInstrument(obj) {
      const arr = [obj].flat() || [];

      this.selectedInstruments = [...this.selectedInstruments, ...arr];
    },

    onDeleteSelectInstrument(id) {
      this.selectedInstruments = this.selectedInstruments.filter(
        (el) => el.instrumentId !== id
      );
      this.instruments = this.instruments.filter(
        (arr1) =>
          !this.selectedInstruments.some(
            (arr2) => arr1.instrumentId === arr2.instrumentId
          )
      );
    },

    onSubmit() {
      const payload = this.selectedInstruments.map((item) => ({
        instrumentid: item.instrumentId,
      }));

      this.isLoading = true;
      this.submitButtonText = `<span class="flex items-center space-x-4"
        ><svg
          class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path></svg
        >Processing...</span>`;

      axios
        .post(
          `${watchListEntriesListApiUrl}/${this.watchlistId}`,
          payload,
          configHeaders
        )
        .then(() => {
          Toastify({
            text: "Watch list was created successfully!",
            ...toastSuccessConfig,
          }).showToast();
          this.initialData();
          this.showModalAddwatchlist = false;
          this.search = "";
          this.selectedInstruments = [];
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          this.isLoading = false;
          this.submitButtonText = "Save";
        });
    },

    cancel() {
      this.showModalAddwatchlist = false;
      this.search = "";
      this.selectedInstruments = [];
      this.isWatchlistCreated = false;
    },
  };
}
