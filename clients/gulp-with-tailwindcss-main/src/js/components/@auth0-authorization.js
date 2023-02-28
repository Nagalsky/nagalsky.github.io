// The Auth0 client, initialized in configureClient()

let auth0 = null;
const authorizationLoginApiUrl =
  "https://www.stockhawk.io/api/authorization/login";

  /**
 * Save affiliate id and campaign id to localStorage
 */
(() => {
  const params = new URL(document.location).searchParams;

  if (params.get("c") !== null && params.get("c") !== "") {
    localStorage.setItem("campaign", params.get("c"));
  }
  if (params.get("via") !== null && params.get("via") !== "") {
    localStorage.setItem("via", params.get("via"));
  }
})();

/**
 * Starts the authentication flow
 */
const login = async (targetUrl = "", isSignup = false) => {
  try {
    await configureAuth0Client(); //Always configure in case login/logout is called.
    var redirecturl = window.location.origin + "/processlogin.html"; //ensures correct Auth0 callback URL.

    const options = {
      redirect_uri: redirecturl,
    };
    
    if (isSignup) {
      options.screen_hint="signup";
    }

    if (targetUrl) {
      options.appState = { targetUrl };
    }
    await auth0.loginWithRedirect(options);
  } catch (err) { 
    console.log("Log in failed", err);
  }
};

/**
 * Executes the logout flow
 */
const logout = async () => {
  try {
    await configureAuth0Client(); //Always configure in case login/logout is called.
    console.log("Logging out");

    localStorage.clear();

    auth0.logout({
      returnTo: window.location.origin,
    });
  } catch (err) {
    console.log("Log out failed", err);
  }
};

/**
 * Initializes the Auth0 client
 */
const configureAuth0Client = async () => {
  auth0 = await createAuth0Client({
    domain: "login.stockhawk.io",
    client_id: "nCUwvzQpHulyFBmkVSiZqP4gHvK3U3fm",
    audience: "https://www.stockhawk.io",
    useRefreshTokens: true,
    scope: "openid profile email email_verified stockhawk:use",
  });
};

const getRequestHeaders = () => {
  var token = localStorage.getItem("authToken");

  var configHeaders = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  return configHeaders;
};

const processInitialLogin = async () => {
  await configureAuth0Client();
  var applicationState;

  try {
    applicationState = await auth0.handleRedirectCallback();
  } catch (error) {
    console.error(error);
    window.location = "/";
  }

  const accessToken = await auth0.getTokenSilently();

  if (accessToken != null) {
    const accessToken = await auth0.getTokenSilently();
    const user = await auth0.getUser();
    localStorage.setItem("authToken", accessToken);
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userPicture", user.picture);
    localStorage.setItem("userEmail", user.email);

    if (
      applicationState != null &&
      applicationState.appState != null &&
      applicationState.appState.targetUrl != null
    ) {
      localStorage.setItem(
        "selectedStocks",
        applicationState.appState.targetUrl
      );
    }
  } else {
    alert("why am I not logged in?");
  }


  const queryParams = new URLSearchParams();
  queryParams.append("via", localStorage.getItem("via"));
  queryParams.append("c", localStorage.getItem("campaign"));

  axios({
    method: "GET",
    url: authorizationLoginApiUrl,
    params: queryParams,
    ...getRequestHeaders(),
  })
    .then((res) => {
      localStorage.setItem("isCustomer", res.data.isCustomer);
      localStorage.setItem("customerType", res.data.customerType);
      localStorage.setItem("subscriberId", res.data.subscriberId);
      localStorage.setItem("isFirstLogin", res.data.isFirstLogin);
      localStorage.setItem(
        "defaultUpdateFrequency",
        res.data.defaultUpdateFrequency
      );
      localStorage.setItem("via", res.data.via);
      localStorage.setItem("campaign", res.data.campaign);

      const pageUrl = localStorage.getItem("url");

      localStorage.getItem("url") === null
        ? (window.location = window.location.origin + "/members")
        : (window.location = window.location.origin + pageUrl);

      localStorage.removeItem("url");
    })
    .catch((err) => {
      console.log("authorizationLoginApiUrl login error: ", err);
    });
};

//Redirect any unauthorized request to /members back to landing page, unless it is to index.html
if (
  location.href.indexOf("/members") != -1 &&
  localStorage.getItem("authToken") == null
) {
  localStorage.setItem(
    "url",
    window.location.pathname + window.location.search
  );

  window.location = "/login.html";
}
