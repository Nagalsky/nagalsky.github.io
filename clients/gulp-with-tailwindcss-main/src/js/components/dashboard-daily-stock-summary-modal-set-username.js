function dashboardDailyStockSummarySetUsernameModal() {
  return {
    isFirstLogin:
      JSON.parse(window.localStorage.getItem("isFirstLogin")) || null,
    isUserName: window.localStorage.getItem("userName") || null,
    isLoading: false,
    submitButtonText: "Save",
    userName: "",
    isNeededName: null,
    watchlistIds: [],
    isEmail: /\S+@\S+\.\S+/,

    init() {
      this.checkUserName();
      this.getSubscriber();
    },

    checkUserName() {
      if (
        this.isFirstLogin &&
        (this.isEmail.test(this.isUserName) || !this.isUserName.length)
      ) {
        this.showModalAddWatchlist = false;
        this.showModalSetUsername = true;
        this.isNeededName = true;
        setTimeout(() => {
          this.$refs.userNameField && this.$refs.userNameField.focus();
        }, 10);
      }
    },

    async getWatchlists() {
      await axios.get(watchListsFullApiUrl, getRequestHeaders()).then((res) => {
        this.data = res?.data;
        this.watchlistIds = this.data.map((item) => item.watchlistId);

        if (!this.watchlistIds.length) {
          this.showModalAddWatchlist = true;
        }
      });
    },

    async getSubscriber() {
      NProgress.start();

      await axios
        .get(subscriberApiURL, getRequestHeaders())
        .then((res) => {
          localStorage.setItem("userName", res?.data?.name);
          const nameAsEmail = this.isEmail.test(res?.data?.name)
            ? ""
            : res?.data?.name;
          this.userName = nameAsEmail;
        })
        .finally(() => {
          NProgress.done();
        });
    },

    async setUserName() {
      NProgress.start();

      const payload = {
        Name: this.userName.trimStart(),
      };

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
      await axios
        .put(subscriberApiURL, payload, getRequestHeaders())
        .then(() => {
          this.showModalSetUsername = false;
          this.getSubscriber();
          this.getWatchlists();
        })
        .catch((err) => {
          Toastify({
            text: err?.response?.statusText,
            ...toastDangerConfig,
          }).showToast();
        })
        .finally(() => {
          this.isNeededName = false;
          this.isLoading = false;
          this.submitButtonText = "Save";
          NProgress.done();
        });
    },
  };
}
