function dashboardBWatchlistCardsInit() {
  return {
    cardData: {},

    initCardState(cardData) {
      if (!cardData) {
        return;
      }

      this.cardData = {
        amount: cardData.amount || "",
        openPrice: cardData.openPrice || "",
        comment: cardData.comment || "",
      };
    },
  };
}
