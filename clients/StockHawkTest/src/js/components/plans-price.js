function pricePlan() {
  return {
    isChecked: false,
    price: 24,
    lowPrice: 24,
    hightPrice: 29,
    increase: function () {
      this.isChecked = !this.isChecked;
      let interval = setInterval(() => {
        this.price++;
        if (this.price >= this.hightPrice) {
          clearInterval(interval);
        }
      }, 50);
    },
    decrease: function () {
      this.isChecked = !this.isChecked;
      let interval = setInterval(() => {
        this.price--;
        if (this.price <= this.lowPrice) {
          clearInterval(interval);
        }
      }, 50);
    },
  };
}
