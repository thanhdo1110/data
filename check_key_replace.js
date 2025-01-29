const url = "https://serverkey.hhnios.site/";

$httpClient.get(url, function (error, response, data) {
    if (error) {
        $done({ body: JSON.stringify({ status: "error", message: "Request failed" }) });
    } else {
        $done({ body: data });
    }
});
