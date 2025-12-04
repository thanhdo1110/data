function applyPlus(json) {
    if (!json || typeof json !== "object") return json;

    const attrs = json?.data?.attributes;
    if (!attrs) return json;

    // Giữ nguyên toàn bộ field cũ, chỉ ghi đè field liên quan đến VIP/PLUS
    attrs.intro_offer_period = true;
    attrs.trial = true;

    // Fake renewal_info y như JSON 1
    attrs.renewal_info = {
        auto_renew: true,
        auto_renew_product_type: attrs.product_type || "instasize_premium_t1_subscription_month_v4"
    };

    // Đảm bảo status là active
    attrs.status = "active";

    // Không đụng tới original_transaction_id, id, created_at...
    // Giữ nguyên chúng từ server

    return json;
}

let body = $response.body;

if (body) {
    try {
        const json = JSON.parse(body);
        applyPlus(json);
        body = JSON.stringify(json);
    } catch (e) {}
}

$done({ body });