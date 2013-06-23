define([], function () {
    var domain = "westconapp.flydigital.com.au",
        serverUrl = "http://" + domain,
        serviceUrl = serverUrl + "/Services/MusicStore.svc";
    
    return {
        domain: domain,
        serverUrl: serverUrl,
        serviceUrl: serviceUrl,
        genresUrl: serviceUrl + "/Genres",
        artistsUrl: serviceUrl + "/Artists",
        albumsUrl: serviceUrl + "/Albums",
        loginUrl: serverUrl + "/login_app",
        cartSubmitUrl: serverUrl + "/Api/CheckoutApi",
        orderHistoryUrl: serverUrl + "/OrderHistory"
    };
});
//http://westconapp.flydigital.com.au/login_app/?email=&password