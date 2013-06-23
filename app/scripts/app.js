define(["jQuery", "kendo", "data", "config", "utils", "home-layout", "base-layout", "account-view"],
  function ($, kendo, data, config, utils, homeLayout, baseLayout, accountView) {

    var _onError = function (error, url, line) {
      utils.showError(error);
    };

    var init = function () {
      window.onerror = _onError;

      var kendoApp = new kendo.mobile.Application(document.body, {
        transition: "slide",
        initial: "viewLogin",
        loading: '<h1 class="loading-message">Loading...</h1>'
      });
      utils.init(kendoApp);
    };

    return {
      closeErrorModal: utils.closeError,
      config: config,
      init: init,
      homeLayout: homeLayout,
      baseLayout: baseLayout,
      accountView: accountView
    };
  });