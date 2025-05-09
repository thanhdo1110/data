// check_key_replace.js - Quantumult X Script

// Trả về đúng chuỗi bạn muốn
var newBody = "{\"membershipType\":\"pro\",\"paymentId\":\"cus_SA0nW3dfYfEv35\",\"daysRemainingOnTrial\":999,\"subscriptionStatus\":\"active\",\"verifiedStudent\":true}";

// Trả về body chỉ chứa chuỗi đó mà không phải là một đối tượng JSON
$done({ body: newBody });
