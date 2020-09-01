---
title: Log In
---
# Log In

This guide introduces how to initialize JC SDK and log in.

## Initialize

Call
[JCClient.create()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/04eda8ae-87ca-50c7-5b35-97c067466d0c.htm)
on the main thread to create a
[JCClient](https://developer.juphoon.com/portal/reference/V2.1/windows/html/a01b672a-1c8a-18a7-b550-727bbcad2f52.htm)
instance object. Pass in the obtained `appKey` to initialize the
[JCClient](https://developer.juphoon.com/portal/reference/V2.1/windows/html/a01b672a-1c8a-18a7-b550-727bbcad2f52.htm):

``````csharp
/// JCClient object
JCClient mClient;

/// Initialization function
public bool initialize(Application app) {
    mClient = JCClient.create(app, "User appKey", new JCClientCallback() {

        public void onLogin(bool b, int i) {

        }

        public void onClientStateChange(int i, int i1) {

        }
    }, null);
    /// Get the initialization state (used to judge the initialization state)
    mInit = mClient.state == JCClientState.Idle;
    return mInit;
}
``````

## Initiate login

After the SDK is initialized, login integration is possible.The call
flow of the login interface is as follows:

![../../../../\_images/workflow\_login\_android.png](../../../../_images/workflow_login_android.png)

First create a
[JCClient.LoginParam](https://developer.juphoon.com/portal/reference/V2.1/windows/html/bf49d392-d1f9-d885-36e5-4af282fdf4b8.htm)
instance to adjust the login parameters. Then call
[login()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/62440094-63ab-7aa8-981d-2c2337419914.htm)
to initiate login:

``````csharp
JCClient.LoginParam loginParam = new JCClient.LoginParam();
/// 1. Set the server environment.
loginParam.serverAddress = "Server address";
/// 2. Initiate login
mClient.login(userID, password, loginParam);
``````

::: tip

1. Environment settings:

      - Domestic environment `http:cn.router.justalkcloud.com:8080`
        (Default)

      - International environment
        `http:intl.router.justalkcloud.com:8080`

2. userID is English, numbers and `+` `-` `_` `.` , case-insensitive,
    the length should not exceed 64 characters, `-` `_` `.` cannot be
    the first character.

3. password the length should not exceed 128 characters.

4. When calling this interface returns true, it only means that the
    interface is called successfully, not that the login is successful.
    The result of the login will be reported through the onLogin
    callback.

:::

After the interface is successfully called, the login state change
callback
[onClientStateChange()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/91ac4180-d727-d901-a06b-3ed4a675f4fb.htm)
will be triggered first. You can perform logical operations by
overriding
[onClientStateChange()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/91ac4180-d727-d901-a06b-3ed4a675f4fb.htm):

``````csharp
public void onClientStateChange(JCClientState state, JCClientState oldState) {
     if (state == JCClient.STATE_IDLE) { /// Not logged in
        ...
    } else if (state == JCClient.STATE_LOGINING) { /// Logging in
        ...
    } else if (state == JCClient.STATE_LOGINED) { /// Login successful
        ...
    } else if (state == JCClient.STATE_LOGOUTING) { /// Logout
        ...
    }
}
``````

Then trigger the
[onLogin()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/98254a36-6a0c-4495-3254-5dc93cd52f52.htm)
callback. You can perform logical operations by overriding
[onLogin()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/98254a36-6a0c-4495-3254-5dc93cd52f52.htm):

``````csharp
public void onLogin(bool result, JCClientReason reason) {
    if (result) {/// Login successful
        ...
    }
    if (reason == REASON_AUTH) {/// Account password is wrong
        ...
    }

}
``````

After the login is successful, the SDK will automatically maintain the
connection status with the server until the user actively calls the
logout interface, or the device is logged out because the account is
logged in on another device. Login success/failure reason Refer to
[JCClient.ClientReason](https://developer.juphoon.com/portal/reference/V2.1/windows/html/9d6e6243-1b3f-55a6-7d0a-3158812dfc6f.htm)
.

## Log out

The call flow of the logout interface is as follows:

![../../../../\_images/workflow\_logout\_android.png](../../../../_images/workflow_logout_android.png)

Call
[logout()](https://developer.juphoon.com/portal/reference/V2.1/windows/html/4b7a3fd4-f6bf-fc4e-8cf9-78023f69b459.htm)
to initiate logout.More logout reason reference:
[JCClient.ClientReason](https://developer.juphoon.com/portal/reference/V2.1/windows/html/9d6e6243-1b3f-55a6-7d0a-3158812dfc6f.htm)
.

Logging out will also trigger a login state change (onClientStateChange)
callback, after which the logout result will be reported via the
onLogout callback:

``````csharp
public void onLogout(JCClientReason reason) {
    if (reason == REASON_SERVER_LOGOUT) {/// Force logout
        ...
    }
}
``````
