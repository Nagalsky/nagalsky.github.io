function accountSettings() {
  return {
    userEmail: null,
    userSecondaryEmail: null,
    useSecondaryEmail: null,
    customerType: null,
    formData: {
      email: "",
    },

    init() {
      this.getSubscriber();
    },

    async onUpdateFrequency(val) {
      NProgress.start();

      const payload = {
        DefaultUpdateFrequency: +val,
      };

      await axios
        .put(subscriberApiURL, payload, getRequestHeaders())
        .then(() => {
          Toastify({
            text: "Watchlist email update frequency was edited successfully!",
            ...toastSuccessConfig,
          }).showToast();
        })
        .finally(() => {
          NProgress.done();
        });
    },

    async getSubscriber() {
      NProgress.start();

      await axios
        .get(subscriberApiURL, getRequestHeaders())
        .then((res) => {
          this.customerType = res?.data?.customerType;
          this.userEmail = res?.data?.email;
          this.userSecondaryEmail = res?.data?.secondaryEmail || "";
          this.useSecondaryEmail =
            res?.data?.useSecondaryEmail === false ? "0" : "1";
        })
        .finally(() => {
          NProgress.done();
        });
    },

    updateSubscriberEmailForm() {
      return {
        loading: false,
        fieldAlert: false,
        submitButtonText: "Save Changes",

        async submitData() {
          if (
            (this.useSecondaryEmail === "1" || this.useSecondaryEmail === 1) &&
            this.formData.email === ""
          ) {
            this.fieldAlert = true;
            return;
          }

          this.fieldAlert = false;
          this.loading = true;
          NProgress.start();

          this.submitButtonText = `<span class="flex items-center space-x-4"
            ><svg
              class="-ml-1 mr-3 h-5 w-5 animate-spin text-blue500 dark:text-white"
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

          let payload = {
            secondaryEmail: this.formData.email,
            useSecondaryEmail: this.useSecondaryEmail === "0" ? false : true,
          };

          await axios
            .put(subscriberApiURL, payload, getRequestHeaders())
            .then(() => {
              this.getSubscriber();
              Toastify({
                text: "Prefered email was edited successfully!",
                ...toastSuccessConfig,
              }).showToast();
            })
            .catch((err) => {
              Toastify({
                text: err?.response?.statusText,
                ...toastDangerConfig,
              }).showToast();
            })
            .finally(() => {
              this.loading = false;
              this.submitButtonText = "Save Changes";
            });
        },
      };
    },

    async deleteSubscriberSecondaryEmail() {
      this.userSecondaryEmail = "";
      this.formData.email = "";

      let payload = {
        secondaryEmail: "",
        useSecondaryEmail: false,
      };

      NProgress.start();

      await axios
        .put(subscriberApiURL, payload, getRequestHeaders())
        .then(() => {
          this.getSubscriber();
          Toastify({
            text: "Prefered email was edited successfully!",
            ...toastSuccessConfig,
          }).showToast();
        })
        .finally(() => {
          NProgress.done();
        });
    },
  };
}
