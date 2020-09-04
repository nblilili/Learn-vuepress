---
title: JAVA面试题
---
---
title: JAVA面试题
---
基础篇

基本功

面向对象的特征

  继承，封装，多态（抽象）

final, finally, finalize 的区别

（1）final是修饰符（关键字）

（2）finally是异常处理中的程序块

（3）finalize是方法名

int 和 Integer 有什么区别

​    基本类型，类

重载和重写的区别

​ 重载跟重写同为多态的表现形式

​ 区别：

​ 重载是指方法名相同，方法参数不同，可以有不同的返回类型。但是注意：相同的方法名在有同样的参数的情况下，仅仅改变返回类型不算重载。

​ 重写是指子类集成父类的时候重写父类方法，要求方法名、参数、返回类型都相同，重写是访问修饰符一定要大于父类的访问修饰符，不能抛出比父类更大范围的异常；

抽象类和接口有什么区别

​ 1. 本质 -- 抽象类的本质是类, 接口是接口

​ 2. 编译语法

​  方法:

​   抽象类可以有普通方法, 接口不可以

​   抽象类可以有静态方法, 接口不可以

​   抽象类可以有构造方法, 接口不可以

​  变量:

​   抽象类可以有普通成员变量, 接口中只能有常量

​  访问类型:

​   抽象类可以用public, protected修饰, 接口只能用public修饰

​  在应用上的区别:

​   一个类只能继承一个抽象类, 但是可以实现多个接口.

​   接口之间可以实现多继承

说说反射的用途及实现

​ ①、在运行时判断任意一个对象所属的类

​ ②、在运行时构造任意一个类的对象

​ ③、在运行时判断任意一个类所具有的成员变量和方法（通过反射设置 可以调用 private）

​ ④、在运行时调用任一个对象的方法

​ 用来开发各种通用框架

说说自定义注解的场景及实现

​ 基本运用：

​ 获得Class对象

​ 判断是否为某个类的实例

​ 创建实例（有两种方式获得实例。一种是直接调用newInstance方法，另外一种是调用construct方法中的newInstance（））

HTTP 请求的 GET 与 POST 方式的区别

​ get方法在地址栏上显示信息

​ get方法有数据量限制

​ get方法显示密码相对不安全

​ get只允许有ASCII字符类型

​ get可以缓存，post不可以缓存

​ get可以添加书签，post不可以

​ 点击刷新get不会重新发送数据，post会重新提交表单

session 与 cookie 区别

Session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中；session保存的是对象

Cookie是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式。cookie保存的是字符串

session 分布式处理

​ 五种方式：

​ 1.黏性session

​ 2.服务器session复制

​ 3.利用redis集群环境

​ 4.数据库持久化session

​ 5.terracotta实现session（相当于第二种方式的加强版）

​ 

JDBC 流程

  1. 加载Dciver类, 注册数据库驱动
  2. 通过DriverManager, 使用url, 用户名和密码建立连接
  3. 通过connection, 使用sql语句打开Statement对象
  4. 执行语句, 将结果返回resultSet
  5. 对结果resultSet进行处理
  6. 关闭连接

MVC 设计思想

​ mvc设计模式是一种使用model、view、controller设计创建Web应用程序的模式。

​ model（模型）负责在数据库中存取数据

​ view（视图）负责显示数据

​ controller（控制器）负责用户交互

​ 

equals 与 == 的区别

​ ==比较的是变量（栈）内存中存放的对象的（堆）内存地址，用来判断两个对象的地址是否相同，即是否是指向同一个对象，比较的是真正意义上的指针操作。

​ 1.比较的操作是两端的操作数是否是同一个对象

​ 2.两边的操作数必须是同一类型的（可以是父子类之间）才能通过编译

​ 3.比较的是地址，如果是具体的阿拉伯数字的比较，值相等则为true，不同基本类型的数字10 ，他们的==结果都是true。因为他们都指向地址10的堆

​ equals用来比较的是两个对象的内容是否相等，如果在当前类中没有重写equals方法的话将继承Object中的equals方法，在Object方法中，equals返回的就是==的判断

​ 

集合

List 和 Set 区别

List 和 Map 区别

​ 首先list跟set是collection的子接口，而map是一个单独的接口

​ List：1.可以允许重复的对象

​  2.可以插入多个null元素

​  3.是一个有序容器，保持了每个元素的插入顺序，输出的顺序就是插入的顺序

​  4.常用的实现类有ArrayList、LinkedList和Vector。ArrayList最为流行，它提供了使用索引的随意访问，二LinkedList则对于经常需要从List中添加或删除元素的场合更为合适

​ Set：1.不允许重复对象

​  2.只允许插入一个null

​  3.无序容器，无法保证每个元素的存储顺序，TreeSet通过Comparator或者comparable维护了一个排序顺序

​  4.Set接口最流行的几个实现类是HashSet、LinkedHashSet和TreeSet。最流行的是基于HashMap实现的HashSet；TreeSet还实现了SortedSet接口，因此TreeSet是一个根据其compare（）和compareTo（）的定义进行排序的有序容器

​ Map：1.Map不是collection的子接口或者实现类。Map是一个接口

​  2.Map的每个Entry都持有两个对象，也就是一个键一个值，Map可能会持有相同的值对象，但是键对象必须是唯一的

​  3.TreeMap也通过Comparator或者Comparable维护了一个排序顺序

​  4.Map里你可以拥有随意个null值，但是最多只能有一个null键。

​  5.Map接口最流行的几个实现类是HashMap、LinkedHashMap、Hashtable和TreeMap。（HashMap、TreeMap最常用）

Arraylist 与 LinkedList 区别

​ 1.ArrayList是实现了基于动态数组的数据结构，LinkedList基于链表的数据结构

​ 2.对于随机访问get和set，ArrayList由于LinkedList，因为LinkedList要移动指针

​ 3.对于新增和删除操作add和remove，LinkedList比较占优势，因为ArrayList要移动数据

​ 时间复杂度：关于不用的操作，ArrayList跟LinkedList各有利弊

​ 空间复杂度：ArrayList的空间浪费主要体现在list列表的结尾会预留一定的容量空间，而LinkedList的空间花费体现在每一个元素消耗的空间相对较大

ArrayList 与 Vector 区别

​ 1.Vector的方法都是同步的（Synchronized），是线程安全的，而ArrayList的方法不是，由于线程的同步必然影响性能，因此，ArrayList的性能比Vector好

​ 2.当Vector或ArrayList中的元素超过它的初始大小时，Vector会将它的容量翻倍，而ArrayList只增加50%的大小，这样，ArrayList就有利于节约内存空间。

HashMap 和 Hashtable 的区别

​ HashMap跟Hashtable他们的性能有点类似于ArrayList跟Vector，Hashtable的方法是同步的，而HashMap的不是

HashSet 和 HashMap 区别

​ HashSet实现了Set接口，它不允许集合中出现重复元素，提到HashSet时，要确保重写hashCode（）和equals（）方法，这样才能比较对象的值是否相等，确保集合中没有存储相同的对象。

​ HashMap实现了Map接口，Map接口对键值对进行映射。Map中不允许出现重复的键（key）。Map接口中有两个基本实现，TreeMap和HashMap。TreeMap保存了对象的排列次序，而HashMap不能，HashMap可以有空的键值对。HashMap是非线程安全的，想实现线程安全，要调用collections类的静态方法synchronizeMap（）实现。

HashMap 和 ConcurrentHashMap 的区别

​ ConcurrentHashMap：在hashMap的基础上，ConcurrentHashMap将数据分为多个segment(段)，默认16个（concurrency level），然后每次操作对一个segment(段)加锁，避免多线程锁的几率，提高并发效率。

HashMap 的工作原理及代码实现

​ HashMap底层就是一个数组结构，数组中存放的是一个Entry对象，如果产生的hash冲突，也就是说要存储的那个位置上面已经存储了对象了，这时候该位置存储的就是一个链表了

​ 相对ConcurrentHashMap少了第二个segment的步骤

ConcurrentHashMap 的工作原理及代码实现

​ ConcurrentHashMap将数据分别放到多个Segment中，默认16个，每一个Segment中又包含了多个HashEntry列表数组，

​ 对于一个key，需要经过三次hash操作，才能最终定位这个元素的位置，这三次hash分别为：

1. 对于一个key，先进行一次hash操作，得到hash值h1，也即h1 = hash1(key)；
2. 将得到的h1的高几位进行第二次hash，得到hash值h2，也即h2 = hash2(h1高几位)，通过h2能够确定该元素的放在哪个Segment；
3. 将得到的h1进行第三次hash，得到hash值h3，也即h3 = hash3(h1)，通过h3能够确定该元素放置在哪个HashEntry。

​ 每一个Segment都拥有一个锁，当进行写操作时，只需要锁定一个  Segment，而其它Segment中的数据是可以访问的。

线程

创建线程的方式及实现

​ **1****）继承****Thread****类创建线程**

​ **2****）实现****Runnable****接口创建线程**

​ **3****）使用****Callable****和****Future****创建线程**

​ 和Runnable接口不一样，Callable接口提供了一个call（）作为线程执行体，call（）方法比run（）方法功能要强大。

​ call（）方法可以有返回值

​ call（）方法可以生命抛出异常

​ 1.创建Callable接口的实现类，并实现call（）方法，然后创建该实现类的实例（从java8开始可以直接使用Lambda表达式创建Callable对象）

​ 2.使用FutureTask类来包装Callable对象，该Future对象封装了Callable对象的call（）方法的返回值

​ 3.使用FutureTask对象作为Thread对象的target创建并启动线程（因为FutureTask实现了Runnable接口）

​ 4.调用FutureTask对象的get（）方法来获得子线程执行结束后的返回值

​ 三种创建线程方法对比

​ 1.线程只是实现Runnable或者实现Callable接口，还可以继承其他类

​ 2.这种方式下，多个线程可以共享一个target对象，非常适合多线程处理同一份资源的情形

​ 3.但是变成稍微复杂，如果需要访问当前线程，必须调用Thread.currentThread（）方法。

​ 4.继承Thread类的线程类不能再继承其他父类（Java单继承）

​ 注：一般推荐采用实现接口的方式来创建多线程

sleep() 、join（）、yield（）有什么区别

​ **sleep****（）**

​ 方法需要指定等待的时间，它可以让当前正在执行的线程在指定的时间内暂停执行，进入阻塞状态，该方法既可以让其他同优先级或者更高优先级的线程得到执行的机会，也可以让低优先级的线程得到执行机会。但是sleep（）方法不会释放“锁标志”，也就是说如果有synchronized同步块，其他线程仍然不能访问共享数据。

​ sleep方法需要抛出异常

​ **wait****（）**

​ wait()，notify()和notifyAll()都是Object类的方法，而不是Thread类的方法。

​ wait()方法与sleep()方法的不同之处在于，wait()方法会释放对象的“锁标志”。当调用某一对象的wait()方法后，会使当前线程暂停执行，并将当前线程放入对象等待池中，直到调用了notify()方法后，将从对象等待池中移出任意一个线程并放入锁标志等待池中，只有锁标志等待池中的线程可以获取锁标志，它们随时准备争夺锁的拥有权。当调用了某个对象的notifyAll()方法，会将对象等待池中的所有线程都移动到该对象的锁标志等待池。

　　除了使用notify()和notifyAll()方法，还可以使用带毫秒参数的wait(long timeout)方法，效果是在延迟timeout毫秒后，被暂停的线程将被恢复到锁标志等待池。

　　此外，wait()，notify()及notifyAll()只能在synchronized语句中使用，但是如果使用的是ReenTrantLock实现同步，该如何达到这三个方法的效果呢？解决方法是使用ReenTrantLock.newCondition()获取一个Condition类对象，然后Condition的await()，signal()以及signalAll()分别对应上面的三个方法。

​ **yield()**

​ yield()方法和sleep()方法类似，也不会释放“锁标志”，区别在于，它没有参数，即yield()方法只是使当前线程重新回到可执行状态，所以执行yield()的线程有可能在进入到可执行状态后马上又被执行，另外yield()方法只能使同优先级或者高优先级的线程得到执行机会，这也和sleep()方法不同。

​ **join()**

​ join()方法会使当前线程等待调用join()方法的线程结束后才能继续执行

说说 CountDownLatch 原理  

说说 CyclicBarrier 原理

说说 Semaphore 原理

说说 Exchanger 原理

说说 CountDownLatch 与 CyclicBarrier 区别

ThreadLocal 原理分析

​ ThreadLocal变量, 线程局部变量, 同一个ThreadLocal所包含的对象,在不同的Thread中有不同的副本

​ ThreadLocal提供了线程本地的实例, 它与普通变量的区别在于, 每个使用该变量的线程都会初始化一个完全独立的实例副本.

  ThreadLocal变量通常被private static修饰, 当一个线程结束时, 它所使用的所有ThreadLocal相对的实例副本都可被回收

​ 因为在一个线程内可以存在多个ThreadLocal对象, 所以其实是ThreadLocal内部维护了一个Map, 这个Map不是直接使用的HashMap, 而是threadLocal实现的一个叫做ThreadLocalMap的静态内部类. 调用get, set方法的时候实际上都是调用了 ThreadLocalMap的get , set方法

讲讲线程池的实现原理

​ 线程池处理任务的流程

 1. 核心线程池是否已满

 2. 队列是否已满

 3. 线程池是否已满

 4. 如果前三步都满了的话则交给饱和策略来处理这个任务(调用rejectedExecution()方法)

    然后说原理

    ThreadPoolExecute 的Execute方法...

    线程池创建线程时, 会将线程封装成工作线程Worker, Worker在执行完任务后, 还会循环获取工作队列里的任务来执行,

    创建线程池的时候要设置的几个参数 主要为

      1. 线程池的基本大小
      2. 任务队列
      3. 线程池最大数量
      4. 用于设置创建线程的工厂
      5. 饱和策略

    向线程池提交任务的时候分别为Excute()方法和submit()

    excute没有返回值, submit方法会返回一个Future对象

    合理配置线程池,需要分析的点有:

      1. 任务的性质
      2. 任务的优先级
      3. 任务的执行时间
      4. 任务的依赖性

线程池的几种方式

​ Executors类中创建线程池的几种方式

    1. newFixedThreadPool创建一个固定大小的线程池
    2. newCachedThreadPool创建一个可缓存的线程池
    3. newSingleThreadExecutor创建一个单线程的线程池, 此线程保证所有任务的顺序按照任务的提交顺序执行
    4. newScheduledThreadPool创建一个大小无限的线程池, 此线程池支持定时以及周期性执行任务的需求
    5. newSingleThreadSecheduledExecutor创建一个单线程的线程池, 此线程池支持定时以及周期性执行任务的需求

线程的生命周期

 1. 新建

 2. 就绪

 3. 运行

 4. 阻塞

 5. 死亡

锁机制

说说线程安全问题

volatile 实现原理

synchronize 实现原理

synchronized 与 lock 的区别

CAS 乐观锁

ABA 问题

乐观锁的业务场景及实现方式

核心篇

数据存储

MySQL 索引使用的注意事项

1. 查询条件中存在函数运算的情况不要使用索引

2. 在查询条件中存在模糊查询或者正则表达的情况不要使用索引

3. 字符串与数字比较不使用索引

4. 如果条件中有or 不使用索引

5. 如果mysql估计使用全表扫描比使用索引快, 则不使用索引

   > 1.索引不会包含有NULL的列
   >
   > ​       只要列中包含有NULL值，都将不会被包含在索引中，复合索引中只要有一列含有NULL值，那么这一列对于此符合索引就是无效的。
   >
   > ​    2.使用短索引
   >
   > ​       对串列进行索引，如果可以就应该指定一个前缀长度。例如，如果有一个char（255）的列，如果在前10个或20个字符内，多数值是唯一的，那么就不要对整个列进行索引。短索引不仅可以提高查询速度而且可以节省磁盘空间和I/O操作。
   >
   > ​    3.索引列排序
   >
   > ​       mysql查询只使用一个索引，因此如果where子句中已经使用了索引的话，那么order by中的列是不会使用索引的。因此数据库默认排序可以符合要求的情况下不要使用排序操作，尽量不要包含多个列的排序，如果需要最好给这些列建复合索引。
   >
   > ​    4.like语句操作
   >
   > ​      一般情况下不鼓励使用like操作，如果非使用不可，注意正确的使用方式。like ‘%aaa%’不会使用索引，而like ‘aaa%’可以使用索引。
   >
   > ​    5.不要在列上进行运算
   >
   > ​    6.不使用NOT IN 、<>、！=操作，但<,<=，=，>,>=,BETWEEN,IN是可以用到索引的
   >
   > ​    7.索引要建立在经常进行select操作的字段上。
   >
   > ​       这是因为，如果这些列很少用到，那么有无索引并不能明显改变查询速度。相反，由于增加了索引，反而降低了系统的维护速度和增大了空间需求。
   >
   > ​    8.索引要建立在值比较唯一的字段上。
   >
   > ​    9.对于那些定义为text、image和bit数据类型的列不应该增加索引。因为这些列的数据量要么相当大，要么取值很少。
   >
   > ​    10.在where和join中出现的列需要建立索引。
   >
   > ​    11.where的查询条件里有不等号(where column != …),mysql将无法使用索引。
   >
   > ​    12.如果where字句的查询条件里使用了函数(如：where DAY(column)=…),mysql将无法使用索引。
   >
   > ​    13.在join操作中(需要从多个数据表提取数据时)，mysql只有在**主键和外键的数据类型相同**时才能使用索引，否则及时建立了索引也不会使用。

​ 数据库索引的目的在于提高查询效率

​ 索引的类型:

  1. 唯一索引(unipue), 不可以出现相同的值, 可以有null值

  2. 普通索引(index), 允许出现相同的索引内容

  3. 主键索引(primary key), 不可以出现相同的值

说说反模式设计

说说分库与分表设计

 1. 垂直切分

    根据业务的不同, 将原先拥有很多字段的表拆分成两个或者多个表.

    但是代价比较大

 2. 水平切分

    数据表结构,将数据分散在多个表中

    ​ 2.1 有瑕疵的简单分库分表(按id的大小分库分表)

    ​ 2.2 取模分库. 将id mod n 然后放进数据库中

    两种扩容方式, 成倍地增加库

    成倍地增加表

分库与分表带来的分布式困境与应对之策

说说 SQL 优化之道

MySQL 遇到的死锁问题

存储引擎的 InnoDB 与 MyISAM

数据库索引的原理

为什么要用 B-tree

聚集索引与非聚集索引的区别

limit 20000 加载很慢怎么解决

选择合适的分布式主键方案

选择合适的数据存储方案

ObjectId 规则

聊聊 MongoDB 使用场景

倒排索引

聊聊 ElasticSearch 使用场景

缓存使用

Redis 有哪些类型

  1. String
  2. Hash
  3. List(列表)
  4. Set(集合)
  5. Sorted Set(有序集合)

Redis 内部结构

  1. dict  ksy和value映射关系的数据结构
  2. sds 
  3. ziplist
  4. quicklist
  5. skiplist

聊聊 Redis 使用场景

Redis 持久化机制

Redis 如何实现持久化

Redis 集群方案与实现

Redis 为什么是单线程的

缓存奔溃

缓存降级

使用缓存的合理性问题

消息队列

消息队列的使用场景

消息的重发补偿解决思路

消息的幂等性解决思路

消息的堆积解决思路

自己如何实现消息队列

如何保证消息的有序性

框架篇

Spring

BeanFactory 和 ApplicationContext 有什么区别

Spring Bean 的生命周期

Spring IOC 如何实现

说说 Spring AOP

Spring AOP 实现原理

动态代理（cglib 与 JDK）

Spring 事务实现方式

Spring 事务底层原理

如何自定义注解实现功能

Spring MVC 运行流程

Spring MVC 启动流程

Spring 的单例实现原理

Spring 框架中用到了哪些设计模式

Spring 其他产品（Srping Boot、Spring Cloud、Spring Secuirity、Spring Data、Spring AMQP 等）

Netty

为什么选择 Netty

说说业务中，Netty 的使用场景

原生的 NIO 在 JDK 1.7 版本存在 epoll bug

什么是TCP 粘包/拆包

TCP粘包/拆包的解决办法

Netty 线程模型

说说 Netty 的零拷贝

Netty 内部执行流程

Netty 重连实现

微服务篇

微服务

前后端分离是如何做的

微服务哪些框架

你怎么理解 RPC 框架

说说 RPC 的实现原理

说说 Dubbo 的实现原理

你怎么理解 RESTful

说说如何设计一个良好的 API

如何理解 RESTful API 的幂等性

如何保证接口的幂等性

说说 CAP 定理、 BASE 理论

怎么考虑数据一致性问题

说说最终一致性的实现方案

你怎么看待微服务

微服务与 SOA 的区别

如何拆分服务

微服务如何进行数据库管理

如何应对微服务的链式调用异常

对于快速追踪与定位问题

微服务的安全

分布式

谈谈业务中使用分布式的场景

Session 分布式方案

分布式锁的场景

分布是锁的实现方案

分布式事务

集群与负载均衡的算法与实现

说说分库与分表设计

分库与分表带来的分布式困境与应对之策

安全问题

安全要素与 STRIDE 威胁

防范常见的 Web 攻击

服务端通信安全攻防

HTTPS 原理剖析

HTTPS 降级攻击

授权与认证

基于角色的访问控制

基于数据的访问控制

性能优化

性能指标有哪些

如何发现性能瓶颈

性能调优的常见手段

说说你在项目中如何进行性能调优

工程篇

需求分析

你如何对需求原型进行理解和拆分

说说你对功能性需求的理解

说说你对非功能性需求的理解

你针对产品提出哪些交互和改进意见

你如何理解用户痛点

设计能力

说说你在项目中使用过的 UML 图

你如何考虑组件化

你如何考虑服务化

你如何进行领域建模

你如何划分领域边界

说说你项目中的领域建模

说说概要设计

设计模式

你项目中有使用哪些设计模式

说说常用开源框架中设计模式使用分析

说说你对设计原则的理解

23种设计模式的设计理念

设计模式之间的异同，例如策略模式与状态模式的区别

设计模式之间的结合，例如策略模式+简单工厂模式的实践

设计模式的性能，例如单例模式哪种性能更好。

业务工程

你系统中的前后端分离是如何做的

说说你的开发流程

你和团队是如何沟通的

你如何进行代码评审

说说你对技术与业务的理解

说说你在项目中经常遇到的 Exception

说说你在项目中遇到感觉最难Bug，怎么解决的

说说你在项目中遇到印象最深困难，怎么解决的

你觉得你们项目还有哪些不足的地方

你是否遇到过 CPU 100% ，如何排查与解决

你是否遇到过 内存 OOM ，如何排查与解决

说说你对敏捷开发的实践

说说你对开发运维的实践

介绍下工作中的一个对自己最有价值的项目，以及在这个过程中的角色

软实力

说说你的亮点

说说你最近在看什么书

说说你觉得最有意义的技术书籍

工作之余做什么事情

说说个人发展方向方面的思考

说说你认为的服务端开发工程师应该具备哪些能力

说说你认为的架构师是什么样的，架构师主要做什么

说说你所理解的技术专家
