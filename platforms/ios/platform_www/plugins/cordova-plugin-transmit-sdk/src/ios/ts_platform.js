cordova.define("cordova-plugin-transmit-sdk.ts_platform", function(require, exports, module) {
/*
 * Copyright (C) Transmit Security, LTD - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

// !!! THIS CODE IS FOR INTERNAL PLUGIN USAGE ONLY AND WILL BE REMOVED IN THE FUTURE !!!
exports.platform =  "ios";
exports.ts_ios_errors = {
    TS_ERR_SERVER_NOT_REACHABLE : 100,
    TS_ERR_BAD_CUSTOMER_ID : 102,
    TS_ERR_USER_DEVICE_UNKNOWN : 103,
    TS_ERR_USER_NOT_AUTHENTICATED : 104,
    TS_ERR_AUTH_USER_OPTED_OUT : 105,
    TS_ERR_AUTH_USER_REJECTED : 107,
    TS_ERR_APPROVALS_EXPIRED : 110,
    TS_ERR_DATA_PROCESSING : 111,
    TS_ERR_AUTH_NO_VALID_AUTHENTICATORS : 112,
    TS_ERR_SDK_VERSION_OLD : 113,
    TS_ERR_REGISTRATION_PERMISSION : 114,
    TS_ERR_AUTH_ALL_LOCKED : 115,
    TS_ERR_POLICY_INVALID : 151,
    TS_ERR_POLICY_AUTHETNICATOR_NOT_PLACEHOLDER : 152
}

});
