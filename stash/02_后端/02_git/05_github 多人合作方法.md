GitHub 多人协作开发 三种方式：

## 一、Fork 方式  

网上介绍比较多的方式（比较大型的开源项目，比如cocos2d-x)
开发者 fork 自己生成一个独立的分支，跟主分支完全独立，pull代码后，项目维护者可根据代码质量决定是否merge代码
此方式网上方法比较多，这里不详细描述

有两种常用的方法在GitHub上建立团队合作：

## 二、组织

 组织的所有者可以针对不同的代码仓库建立不同访问权限的团队。
Accounts Settings => Organizations =>Create new Organizations 新建一个组织  然后添加项目成员，根据提示设置完毕即可。
新建一个Repository  新建完毕后  进入Repository的Settings =>Collaborators 在Teams下面点击刚创建的组织 比如eveloper-51/owners
里面就可以添加或者remove组织成员

## 三、合作者 

 代码仓库的所有者可以为单个仓库增加具备只读或者读写权限的协作者。
合作者方式比较实用，也很方便，新建一个Repository，完毕之后，进入Repository的Settings，然后在Manage Collaborators里就可以管理合作者了。
其他合作者，实用 ssh-keygen -C "YourEmail@example.com" （这里的email使用github账号）生成公钥和私钥，在Accounts Settings=》SSH keys 将公钥上传上去。
上传完成后，可使用Tower(Mac下Git管理工具）clone remote Repository  使用SSH方式登录（这里的私钥使用刚才生成的） 这样，其他合作者就可以正常的PUSH代码了。