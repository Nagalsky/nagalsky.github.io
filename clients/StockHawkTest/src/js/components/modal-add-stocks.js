function loadInstruments() {
  return {
    search: "",
    instruments: [],
    existingInstruments: [],
    selectedInstruments: [],
    watchlistId: null,
    noInstruments: false,
    isLoading: false,

    getExistingInstruments(data) {
      this.watchlistId = data[0].watchlistId;
      this.existingInstruments = data[0].entries;
    },

    fetchInstruments() {
      if (this.search === "") {
        this.instruments = [];
        this.noInstruments = false;
        return;
      }

      NProgress.start();

      fetch(`${instrumentsApiURL}/${this.search}`)
        .then((res) => res.json())
        .then((data) => {
          !data.length
            ? (this.noInstruments = true)
            : (this.noInstruments = false);

          this.instruments = data;
          this.instruments = this.instruments.filter(
            (arr1) =>
              !this.existingInstruments.some(
                (arr2) => arr1.instrumentId === arr2.instrumentId
              )
          );

          this.instruments = this.instruments.filter(
            (arr1) =>
              !this.selectedInstruments.some(
                (arr2) => arr1.instrumentId === arr2.instrumentId
              )
          );
        })
        .catch((err) => {
          Toastify({
            text: err,
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

      let raw = JSON.stringify([...payload]);

      const requestOptions = Object.assign(requestPostOptions, {
        body: raw,
      });

      this.isLoading = true;

      fetch(`${watchListEntriesListApiUrl}/${this.watchlistId}`, requestOptions)
        .then((res) => res.text())
        .then(() => {
          Toastify({
            text: "Watch list entries was created successfully!",
            ...toastSuccessConfig,
          }).showToast();
          this.getData();
          this.showModalAddStock = false;
          this.search = "";
          this.selectedInstruments = [];
        })
        .catch((err) => {
          Toastify({
            text: err,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  };
}
