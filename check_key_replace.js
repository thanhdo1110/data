const url = "https://serverkey.hhnios.site/check_key/WeansHHN?key=HdangIos-fe6b37d44e4240fba018d6461a09152e&uuid=9AA5670A-7ED5-4173-9932-57FFA38309AD";

$httpClient.get(url, function (error, response, data) {
    if (error) {
        $done({ body: JSON.stringify({ status: "error", message: "Request failed" }) });
    } else {
        $done({ body: data });
    }
});