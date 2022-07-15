function loadAddingTradeModal() {
  return {
    tradeModalData: "",
    tradeModalSymbol: null,
    fields: null,

    getTradeInfo(cardInfo) {
      if (!cardInfo) {
        return;
      }
      this.tradeModalData = cardInfo;
      this.tradeModalSymbol = cardInfo.symbol;
      this.fields = [];
      this.fields.push({
        quantity: "",
        purchaseDate: "",
        purchasePrice: "",
      });
    },

    createTradeForm() {
      return {
        submitButtonText: "Save",
        isLoading: false,
        isDisabledFields: false,
        alertQuantity: false,
        alertPurchaseDate: false,
        isDisabledAddRow: true,
        isFormValid: true,
        isQuantityValid: true,
        isPurchaseDateValid: true,

        amountMask(input) {
          let res = input.replace(/[^\d.]+/g, "");
          return res;
        },

        openPriceMask() {
          new Cleave(this.$refs.inputPriceMask, {
            numeral: true,
            numeralDecimalMark: ".",
            delimiter: ",",
          });
        },

        datepicker() {
          flatpickr(this.$refs.datepicker, {
            static: true,
            disableMobile: true,
            dateFormat: "d-m-Y",
            maxDate: new Date(),
            locale: {
              firstDayOfWeek: 1,
            },
            disable: [
              function (date) {
                return date.getDay() === 0 || date.getDay() === 6;
              },
            ],
          });
        },

        checkPrice(item) {
          if (!Boolean(item.purchaseDate)) {
            return;
          }
          const dateStr = moment(item.purchaseDate, "DD-MM-YYYY");
          const date = dateStr.format("YYYYMMDD");

          NProgress.start();
          this.isDisabledFields = true;

          axios
            .get(
              `${historicpricesApiURL}/${this.tradeModalSymbol}/${date}`,
              configHeaders
            )
            .then((res) => {
              item.purchasePrice = res.data.close;
              this.disableAddFieldsRow();
              this.validatePurchaseDate();
            })
            .catch((err) => {
              Toastify({
                text: err?.response?.statusText,
                ...toastDangerConfig,
              }).showToast();
            })
            .finally(() => {
              this.isDisabledFields = false;
              NProgress.done();
            });
        },

        addFieldsRow() {
          this.fields.push({
            quantity: "",
            purchaseDate: "",
            purchasePrice: "",
          });
          this.disableAddFieldsRow();
        },

        disableAddFieldsRow() {
          this.fields?.some((field) => {
            if (
              Boolean(field.quantity !== "") &&
              Boolean(field.purchasePrice !== "")
            ) {
              this.isDisabledAddRow = false;
            } else {
              this.isDisabledAddRow = true;
            }
          });

          if (!this.fields?.length) {
            this.isDisabledAddRow = false;
          }
        },

        removeField(index) {
          this.fields.splice(index, 1);
          this.alertQuantity = false;
          this.alertPurchaseDate = false;
          this.isFormValid = true;
          this.disableAddFieldsRow();
        },

        validateQuantity() {
          this.fields?.every((field, index) => {
            if (!!+field.quantity) {
              this.alertQuantity = false;
              this.isQuantityValid = true;
            } else {
              field.quantity === ""
                ? (this.alertQuantity = index)
                : (this.alertQuantity = false);

              this.isQuantityValid = false;
            }
          });
        },

        validatePurchaseDate() {
          this.fields?.every((field, index) => {
            if (!!+field.purchasePrice) {
              this.alertPurchaseDate = false;
              this.isPurchaseDateValid = true;
            } else {
              field.purchasePrice === "" || field.purchasePrice === "0"
                ? (this.alertPurchaseDate = index)
                : (this.alertPurchaseDate = false);

              this.isPurchaseDateValid = false;
            }
          });
        },

        submit() {
          this.validateQuantity();
          this.validatePurchaseDate();

          if (!this.isQuantityValid || !this.isPurchaseDateValid) {
            return;
          }

          const cleanPayload = (obj) => {
            Object.keys(obj).forEach((key) => {
              let value = obj[key];
              let hasProperties = value && Object.keys(value).length > 0;
              if (value === null || value === "" || value === undefined) {
                delete obj[key];
              } else if (typeof value !== "string" && hasProperties) {
                cleanPayload(value);
              }
            });
            return obj;
          };

          const payload = this.fields.map((item) => ({
            amount: item.quantity,
            transactionPrice: item.purchasePrice,
            transactionDate: item.purchaseDate
              ? moment(item.purchaseDate, "DD-MM-YYYY").format()
              : "",
          }));

          cleanPayload(payload);

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
              `${watchListPositionsApiUrl}/${this.tradeModalData.watchlistEntryId}`,
              payload,
              configHeaders
            )
            .then(() => {
              Toastify({
                text: "Trades was created successfully!",
                ...toastSuccessConfig,
              }).showToast();
              this.cancel();
              this.initialData();
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
          this.showModalAddingTrade = false;
          this.fields = [];
          this.alertQuantity = false;
          this.alertPurchaseDate = false;
          this.isFormValid = true;
          this.disableAddFieldsRow();
        },
      };
    },
  };
}
