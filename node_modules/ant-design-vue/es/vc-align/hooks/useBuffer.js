export default (function (callback, buffer) {
  var called = false;
  var timeout = null;

  function cancelTrigger() {
    window.clearTimeout(timeout);
  }

  function trigger(force) {
    if (!called || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      called = true;
      cancelTrigger();
      timeout = window.setTimeout(function () {
        called = false;
      }, buffer.value);
    } else {
      cancelTrigger();
      timeout = window.setTimeout(function () {
        called = false;
        trigger();
      }, buffer.value);
    }
  }

  return [trigger, function () {
    called = false;
    cancelTrigger();
  }];
});