function loadInstruments() {
  return {
    search: "",
    instruments: [],
    existingInstruments: [],
    selectedInstruments: [],
    noInstruments: false,

    getExistingInstruments(data) {
      this.existingInstruments = data;
      console.log("existingInstruments: ", this.existingInstruments);
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
      this.selectedInstruments;
      console.log("selectedInstruments", this.selectedInstruments);
      console.log(
        "selectedInstruments length: ",
        this.selectedInstruments.length
      );
    },
  };
}
