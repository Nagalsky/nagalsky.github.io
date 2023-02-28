function fieldAutoFocus(el, timeout) {
  if (!timeout) {
    timeout = 100;
  }
  if (el) {
    setTimeout(function () {
      el.focus();
      el.dispatchEvent(new Event("touchstart"));
      el.click();
    }, timeout);
  }
}
