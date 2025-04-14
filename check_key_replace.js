// check_key_replace.js - Quantumult X Script
var newBody = JSON.stringify({
    data: "PMuPmATmEj1Q+Ve902CqjtoRW1dwB1lFHrdBpykvk/GdsgAumF3j1NYCvpRxmj1mEO+FIrXVr5dDLEA4uY0cIZ0guV+ABJ+essteKn/o9A259Itac1AasbJiwVASQ+uiutjMEFhDV9azQ063d6va4gsm2EZL9LLm7c6NxQNmQKvSJ/3c9gMbjUcNQzzUIso+tJNwu0V2z6dZTHBPTrsWU7qHfKia762ag7ahJdEDnrYFZGWg437bp9Z7MsbJtfPi"
});

// Đảm bảo bạn không thay đổi các header hoặc response status
$done({ body: newBody });
