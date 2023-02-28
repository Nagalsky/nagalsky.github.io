function stripeMode() {
  return {
    stripeCustomerPortalUrl: null,
    isLiveMode: null,
    pricingTableId: null,
    publishableKey: null,
    baseUrl: "https://www.stockhawk.io/",
    clientReferenceId: null,

    init() {
      const currentUrl = window.location.href;
      this.clientReferenceId = localStorage.getItem("subscriberId");

      if (currentUrl.indexOf(this.baseUrl) != -1) {
        this.stripeCustomerPortalUrl =
          "https://billing.stripe.com/p/login/00g02Wb3XfKrgOA4gg";
        this.isLiveMode = true;
        this.pricingTableId = "prctbl_1LppD5LMlfR7vGHCOETEKCqu";
        this.publishableKey =
          "pk_live_51KuwfpLMlfR7vGHC1OQ93UoPkwNLpnHopRCsAzQ9jVrINi0KqtQ0TaKV4V7Saf54kEZBYTyyuLOgIuCRUG7aRQoS00fWJTze38";
      } else {
        this.stripeCustomerPortalUrl =
          "https://billing.stripe.com/p/login/test_aEUeYu8Rh7Pl4DKfYY";
        this.isLiveMode = false;
        this.pricingTableId = "prctbl_1LppxFLMlfR7vGHCzYpXVNNY";
        this.publishableKey =
          "pk_test_51KuwfpLMlfR7vGHCbXlw6f9WOJjLbtlymZoVnYxslJJU3hUvgJcp7OMa0FzraEbbO4O1IjrMRXkKzdnoBZsuMag900wUq9gW19";
      }
    },
  };
}
