---
title: git撤回
---
# 取消暂存

```
git reset HEAD
```

情况三：文件执行了git add操作，但想撤销对其的修改（index内回滚）

# 取消暂存

```
git reset HEAD fileName
```

# 撤销修改

```
git checkout fileName
```

情况四：修改的文件已被git commit，但想再次修改不再产生新的Commit

# 修改最后一次提交

```

```

```
git add sample.txt
git commit --amend -m"说明"
```

情况五：已在本地进行了多次git commit操作，现在想撤销到其中某次Commit

```
git reset [--hard|soft|mixed|merge|keep] [commit|HEAD]
```

具体参数和使用说明，请查看：Git Pro深入浅出（二）中的重置揭秘部分

回滚
上述场景二，已进行git push，即已推送到“远程仓库”中。我们将已被提交到“远程仓库”的代码还原操作叫做“回滚”！注意：对远程仓库做回滚操作是有风险的，需提前做好备份和通知其他团队成员！

如果你每次更新线上，都会打tag，那恭喜你，你可以很快的处理上述场景二的情况

```
git checkout <tag>
```

如果你回到当前HEAD指向

```
git checkout <branch_name>
```

情况一：撤销指定文件到指定版本

情况一：撤销指定文件到指定版本

# 查看指定文件的历史版本

```
git log <filename>
```

# 回滚到指定commitID

```
git checkout <commitID> <filename>
```

情况二：删除最后一次远程提交

方式一：使用revert

```
git revert HEAD
git push origin master
```

方式二：使用reset

```
git reset --hard HEAD^
git push origin master -f
```

二者区别：

revert 是放弃指定提交的修改，但是会生成一次新的提交，需要填写提交注释，以前的历史记录都在；
reset 是指将HEAD指针指到指定提交，历史记录中不会出现放弃的提交记录。
情况三：回滚某次提交

# 找到要回滚的commitID

```
git log
git revert commitID
```

删除某次提交

```
git log --oneline -n5
```

```
git rebase -i "commit id"^
```

注意： 需要注意最后的*^*号，意思是commit id的前一次提交

```
git rebase -i "5b3ba7a"^
```

在编辑框中删除相关commit，如pick 5b3ba7a test2，然后保存退出（如果遇到冲突需要先解决冲突）！

```
git push origin master -f
```

通过上述操作，如果你想对历史多个commit进行处理或者，可以选择git rebase -i，只需删除对应的记录就好。rebase还可对 commit 消息进行编辑，以及合并多个commit。
