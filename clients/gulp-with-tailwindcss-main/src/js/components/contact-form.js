function contactForm() {
  return {
    fieldName: "",
    fieldEmail: "",
    fieldMessage: "",
    alertEmail: false,
    alertMessage: false,

    async onSubmit() {
      if (!this.fieldEmail || !this.fieldMessage) {
        if (this.fieldEmail === "") {
          this.alertEmail = true;
        } else {
          this.alertEmail = false;
        }
        if (this.fieldMessage === "") {
          this.alertMessage = true;
        } else {
          this.alertMessage = false;
        }
        return;
      }

      this.alertEmail = false;
      this.alertMessage = false;

      const payload = {
        name: this.fieldName,
        email: this.fieldEmail,
        message: this.fieldMessage,
      };

      await axios.post(contactApiUrl, payload, getRequestHeaders()).then(() => {
        this.showModalContactConfirmation = true;
      });
    },
  };
}
