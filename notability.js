// 解析服务器返回的 JSON 响应
var chxm1023 = JSON.parse($response.body);

// 修改订阅信息，确保是有效的高级订阅
chxm1023.data = {
  "processAppleReceipt": {
    "error": 0,
    "subscription": {
      "productId": "com.gingerlabs.Notability.premium_subscription",
      "originalTransactionId": "570001184068302",
      "tier": "premium",
      "refundedDate": null,
      "refundedReason": null,
      "isInBillingRetryPeriod": false,
      "expirationDate": "2099-09-09T09:09:09.000Z",
      "gracePeriodExpiresAt": null,
      "overDeviceLimit": false,
      "expirationIntent": null,
      "__typename": "AppStoreSubscription",
      "user": null,
      "status": "active" 
    },
    "__typename": "SubscriptionResult"
  }
};

$done({ body: JSON.stringify(chxm1023) });
