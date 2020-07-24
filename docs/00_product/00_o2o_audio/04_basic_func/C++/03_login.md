---
title: 登录
---
# 登录

本章节介绍如何初始化 JC SDK 并登录。



## 初始化

在调用初始化方法前需要先继承 JCClientCallback 对象，然后实现 JCClientCallback 对象中的纯虚函数。





    class JCManager : public JCClientCallback
    {
    public:
        //单例管理类
        JCManager();
        ~JCManager();
    
        static std::shared_ptr<JCManager> shared();
        bool initialize();
        void uninitialize();
        //登录回调
        virtual void onLogin(bool result, JCClientReason reason);
        //登出回调
        virtual void onLogout(JCClientReason reason);
        //登录状态变化回调
        virtual void onClientStateChange(JCClientState state, JCClientState oldState);
    
    public:
        //JCClient 对象
        JCClient* client;
    };





然后在主线程调用 JCClientImpl 类中的
[createJCClient](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_client_8h.html#a2d6fc4f203884536ff69bfe0e0ed300f)
方法，传入获取到的 `appKey` 进行 JC SDK 的初始化。





    bool JCManager::initialize()
    {
        //初始化
        client = createJCClient("用户 appKey", this, NULL);
        if (client->getState() == JCClientStateNotInit) {
            return false;
        }
        return true;
    }
    
    //登录结果回调
    void JCManager::onLogin(bool result, JCClientReason reason) {
    }
    //登出结果回调
    void JCManager::onLogout(JCClientReason reason) {
    }
    //登录状态变化回调
    void JCManager::onClientStateChange(JCClientState state, JCClientState oldState) {
    }





初始化成功后，JCClient 状态变为 JCClientStateIdle（未登录状态）。





## 发起登录

SDK 初始化之后，即可进行登录的集成。登录接口调用流程如下所示：

![../../../../\_images/ios\_login.png](../../../../_images/ios_login.png)

先创建
[JCClientLoginParam](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_client_login_param.html)
对象以设置登录参数。然后调用
[login](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_client.html#ad612e9957623869289103fbf0721d902)
发起登录:





    //登录
    void JCSampleDlg::OnBnClickedButtonLogin()
    {
        int state = JCManager::shared()->client->getState();
        if (state == JCClientStateIdle) {
            JCClientLoginParam* loginParam = new JCClientLoginParam();
            // 1. 设置服务器环境
            loginParam->serverAddress = "服务器地址";
            // 2. 发起登录
            JCManager::shared()->client->login("用户名", "123", loginParam);
        }
        else {
            // 如果已经登录则登出
            JCManager::shared()->client->logout();
        }
    }







Note

1.环境设置：

> 
> 
> 
> 
>   - 国内环境 <http:cn.router.justalkcloud.com:8080> （默认）
> 
>   - 国际环境 <http:intl.router.justalkcloud.com:8080>
> 
> 

2.  userID 不能为空，可由英文、数字和 `+` 、 `-` 、 `_` 、 `.`
    组成（特殊字符不能作为第一个字符），大小写不敏感，长度不能超过
    64 个字符。

3.  password 不能超过 128 个字符。

4.  调用该接口返回 true 时只代表调用接口成功，并不代表登录成功。登录的结果会通过 onLogin 回调上报。



调用接口成功后，首先会触发登录状态改变回调
[onClientStateChange](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_client_callback.html#ace087f907d2f8a2413f10d34cfb47337)
，你可以在该回调中执行逻辑操作。





    void JCManager::onClientStateChange(JCClientState state, JCClientState oldState) {
         if (state == JCClient.STATE_IDLE) { // 未登录
           ...
        } else if (state == JCClientStateLogining) { // 正在登录
           ...
        } else if (state == JCClientStateLogined) { // 登录成功
           ...
        } else if (state == JCClientStateLogouting) { // 登出中
           ...
        }
    }





之后触发
[onLogin](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_client_callback.html#ab2deb2e2d3c95f848d9dc2baa7c6daff)
回调。你可以在该回调中执行逻辑操作。





    void JCManager::onLogin(bool result, JCClientReason reason) {
        if (result) {/// 登录成功
            ...
        }
        if (reason == JCClientReasonAuth) {// 账号密码错误
            ...
        }
    }





登录成功后，JCClientState 状态从 JCClientStateIdle（未登录）变为
JCClientStateLogined（登录成功）。SDK
会自动保持与服务器的连接状态，直到用户主动调用登出接口，或者因为帐号在其他设备登录导致该设备登出。登录成功/失败原因
参考
[JCClientReason](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_client_constants_8h.html#a8b1b44e57fff02634fd4637428a70020)
。





## 登出

登出接口调用流程如下所示：

![../../../../\_images/ios\_logout.png](../../../../_images/ios_logout.png)

调用
[logout](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/class_j_c_client.html#abac015a13078c84b06afac69dcd392ff)
发起登出





    JCManager::shared()->client->logout();





登出结果回调





    void JCManager::onLogout(JCClientReason reason) {
        if (reason == JCClientReasonServerLogout) {// 强制登出
            ...
        }
    }





登出原因请参考：[JCClientReason](https://developer.juphoon.com/portal/reference/V2.1/windows/C++/html/_j_c_client_constants_8h.html#a8b1b44e57fff02634fd4637428a70020)。

登出成功后，JCClientState 状态从 JCClientStateLogined（登录成功） 变为
JCClientStateIdle（未登录）。














