---
title: Smart hardware
---
# Smart hardware

## Standby Power Optimization Solution

### Prerequisites

The watch has registered fake push.

### Procedure description

1. The mobile phone calls the watch, and at the same time sends a
    notification to the watch through its own push channel.

2. After the watch receives the notification, Initialize the Juphoon
    module and log in.

3. After successful Login, wait for the server to call in.

4. Receive an incoming call and answer it.

5. Call ended.

6. Destroy the Juphoon module.

::: tip

1.The mobile phone needs to have a timeout mechanism to ensure that it
can hang up in time when another party does not receive an incoming
call.

2.If you cannot receive the call after the successful login, it may be
because the mobile phone hangs up before the watch is logged in. At this
time, the call has become a missed call from the watch, causing the call
not go through the calling process.

3.After registering fake push, you don’t need to call logout to log out,
just destroy the Juphoon module directly, otherwise the push will be
invalid.

:::

### Calling party

1. the Juphoon interface to call the called party (watch);

2. The watch manufacturer activates the watch by push.

### The called party

The called party (watch) performs the following operations:

1. Add to create JCPush module:

    ``````java
    JCPush push = JCPush.create(client);
    ``````

2. After successful Login , register a fake push with the server,
    mainly to make the server think that the user is not offline, so
    that the calling call will not be directly rejected by the server:

    ``````java
    JCPushTemplate pushInfo = new JCPushTemplate();
    pushInfo.initWithMiPush(context.getPackageName(), "free to input");
    JCManager.getInstance().push.addPushInfo(pushInfo);s
    pushInfo.initWithCall(JCPushTemplate.XIAOMI, JCManager.getInstance().client.getUserId(), "call", "0");
    JCManager.getInstance().push.addPushInfo(pushInfo);
    //set mode after successful login or before receicve a call
    JCManager.shared.call.mediaConfig = JCCall.MediaConfig.generateByMode(JCCall.MediaConfig.MODE_INTELLINGENT_HARDWARE_SMALL);
    ``````

3. After the watch receives the push from the manufacturer itself, it
    will activate the Juphoon module to perform operations such as
    Initialization and login, and the call will be received after
    successful Login;

4. After call ended, you can destory the Juphoon module.
