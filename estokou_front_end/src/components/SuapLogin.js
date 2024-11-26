function SuapLogin() {
    var suap = new SuapClient(
		SUAP_URL, CLIENT_ID, HOME_URI, REDIRECT_URI, SCOPE
	  );
      suap.init();
      $(document).ready(function () {
          $("#suap-login-button").attr('href', suap.getLoginURL());
      });
}