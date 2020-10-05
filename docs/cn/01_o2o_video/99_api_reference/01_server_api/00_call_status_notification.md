---
title: 通话状态通知
---
# 通话状态通知

## 简介

获取通话状态通知是菊风云平台提供的一项服务。通过该服务，您的服务器可以获得通话的实时状态通知，从而使您能够在通话业务的基础上增加额外的业务控制。

文档描述基于您已经完成以下工作：

- [创建应用](../../../juphoon_platform/03_console_description/03_应用管理)
- [实现一对一通话](../../04_basic_func/02_achieve/iOS)

基本架构

![image](../../../../_images/statenotifyframework.png)

## 控制台配置通知服务器

为了获取通话状态通知，您需要在控制台设置接收通话状态通知的服务器地址、鉴权用户名和密码：

1. 进入**控制台**  - **服务管理** - **应用管理**
2. 在 **操作** 一栏中点击 **设置** <img src="../../../../_images/image-20200925141010930.png" alt="image-20200925141010930" style="zoom:50%;" />图标
3. 在 **状态配置** 中 点击 **添加状态服务器** 后的 **添加**<img src="../../../../_images/image-20200925140937588.png" alt="image-20200925140937588" style="zoom:45%;" /> 按钮

![image-20200925141336897](../../../../_images/status-notification-settings.png)

其中：

- HTTP 鉴权域用户名和用户密码，是用于访问您的服务器的用户名和密码
- 服务器 URL 是您的服务器访问的 URL 信息

  - 如果您的服务器通过 HTTPS 访问，请对应选择 HTTPS
  - 如果您的服务器通过域名访问，这里需要填入对应域名
  - 如果您的服务器有特定的访问路径，请一并填入。例如 112.124.116.65:7123/call\_status/

## 通话状态通知流程

一对一通话中，不同情况下的通话状态通知流程如下图所示：

### 情况一：正常呼叫

![image](../../../../_images/callstatenormal.png)

### 情况二：被叫拒接

![image](../../../../_images/callstatereject.png)

### 情况三：被叫超时未响应

![image](../../../../_images/callstatemissed.png)

### 重发机制

为保证状态通知的可靠性，菊风服务器按照以下规则重发通知请求：

- 事件发生时发送第一次通知请求
- 正确响应要求响应中的 tid 和请求中的 tid 保持一致，并且 ret 的值为 true
- 没有收到正确响应的情况下，间隔 2 分钟重发一次，一共重发 5 次

## 消息格式

statusNotify 消息用于通知通话状态，由菊风服务器发起 RESTful 请求，由客户服务器响应。获取通话状态通知的操作如下：

### 请求

**HTTP报文样例：**

``` JavaScript
POST / HTTP/1.1
Authorization: Basic dXNlcjpwYXNzd29yZA==
Content-Length: 535
Content-Type: application/json
Domain: john.lu_juphoon.com
Host: 182.92.66.126:71234

{"tid":4174673023,
"oid":"OpenCallUser",
"cmd":"statusNotify.OpenCall.CallEx",
"in":{"callId":94532840325125,
    "status":"call released by ([username:t123@test.com]) "
    "params":{"CallId":"94532840325125",
                "CallAppId":"2",
                "CallDomainId":"100299",
                "CallMediaType":"voice",
                "CalleeAccountId":"[username:t123@test.com]",
                "CallerAccountId":"[username:t456@test.com]",
                "CallOriginateTime":"1442456670",
                "CallAnswerTime":"1442456676",
                "CallTalkingDuration":"47",
                "ReleaseCallBy":"[username:t123@test.com]",
                "ReleaseCallReason":"User Terminate"
                },
    },
"params":{}
}
```

HTTP报文头：

| 报文头域       | 是否必选 | 值                                            | 说明                                                         |
| -------------- | -------- | --------------------------------------------- | ------------------------------------------------------------ |
| POST           | 是       |                                               |                                                              |
| Authorization  | 否       | Basic<br/>\[Base64(菊风分配的域用户名:密码)\] | 此处假定客户指定的HTTP鉴权用户名为user，密码为password，"dXNlcjpwYXNzd29yZA=="为(“user:password”)字符串经过Base64编码后的结果 |
| Content-Length | 是       | HTTP Body的实际长度                           |                                                              |
| Content-Type   | 是       | application/json                              |                                                              |
| Domain         | 否       | 发起请求者的域名                              |                                                              |

配置参数：

| 键                  | 值的格式/类型  | 说明                                                         |
| ------------------- | -------------- | ------------------------------------------------------------ |
| tid                 | int            | 事务ID。一次状态通知交互过程。客户服务响应消息中应携带对应值 |
| callId              | string | 通话ID，一次通话的唯一标识                                   |
| status              | string         | - "user(xxx) trying"，表示正在尝试呼叫xxx用户，但尚未接通"user(xxx) joined"，表示xxx用户已接听，被接入到呼叫中; <br />- "user(xxx) left”，表示xxx用户从呼叫中断开; <br />- "call released by (xxx)”，表示呼叫已被释放。xxx可能是用户，也可能是服务器 |
| CallerAccountId     | string         | 主叫用户的帐号                                               |
| CalleeAccountId     | string         | 被叫用户的帐号                                               |
| CallMediaType       | string         | 媒体类型，语音为 voice，视频为 video                         |
| CallOriginateTime   | string         | 呼叫发起的 UNIX 时间戳，单位秒                               |
| CallAnswerTime      | string         | 呼叫接听的 UNIX 时间戳，单位秒。如果值为 0 表示未进入通话状态 |
| CallTalkingDuration | string         | 通话时长，单位为秒。若值为0表示未进入通话状态                |
| ReleaseCallBy       | string         | 呼叫释放方信息：<br />- 如果值为用户帐号则代表由该用户释放呼叫<br />- 如果值为 OpenCallServer 则代表由客户侧服务器释放<br />- 如果值为CallServer则代表由菊风侧服务器释放。 |
| ReleaseCallReason   | string         | 释放的原因:<br />- "Not Exists:xxx"，代表xxx用户的账户ID不合法 <br />- "No Sessions:xxx", 代表xxx用户的帐号ID未正常登录（Login） <br />- "Inactive Call Clean", 代表主叫客户端未能在规定的时间内（120s）发起呼叫，原先分配的CallId被清理掉。 <br />- "User Terminate:xxxx", 代表主叫或被叫用户主动挂机而导致的呼叫释放，其中 xxxx 代表终端释放的原因值 <br />- "OpenCallServer Terminate", 代表客户服务器调用releaseCall操作而导致的呼叫释放 <br />- "Timeout", 代表被叫侧超时（60s内）未接听呼叫，而导致服务器释放掉呼叫。 |

### 响应

**HTTP报文样例：**

``` JavaScript
HTTP/1.1 202 Accepted
Cntent-Length: 29

{"tid":4174673023,"ret":true}
```

HTTP报文头：

| 报文头域       | 是否必选 | 值                                            |
| -------------- | -------- | --------------------------------------------- |
| 202 Accepted   | 是       |                                               |
| Authorization  | 否       | Basic<br/>\[Base64(菊风分配的域用户名:密码)\] |
| Demain         | 否       | HTTP Body的实际长度                           |
| Content-Length | 是       | application/json                              |

配置参数：

| 值   | 值的格式/类型 | 说明                                                         |
| ---- | ------------- | ------------------------------------------------------------ |
| tid  | int           | 事务ID。您的HTTP服务器回复的响应中，该字段的值应与请求报文保持一致。 |
| ret  | boolean       | true表示收到通知。                                           |
