function confirmUnsubscribeModal() {
  return {
    submitButtonText: "Unsubscribe",
    isLoading: false,

    async onDelete() {
      let queryString = window.location.search;
      const unsubscribeKey = queryString.slice(3);

      unsubscribeApiUrlWithKey = `https://www.stockhawk.io/api/Subscriber/unsubscribe/${unsubscribeKey}`;

      if (unsubscribeKey.length) {
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
          .delete(unsubscribeApiUrlWithKey, getRequestHeaders())
          .then(() => {
            localStorage.clear();
            window.location = window.location.origin + "/";
          })
          .finally(() => {
            this.isLoading = false;
            this.submitButtonText = "Delete";
          })
          .catch((err) => {
            console.log("Unsubscribe error: ", err);
          });
      }
    },
  };
}
