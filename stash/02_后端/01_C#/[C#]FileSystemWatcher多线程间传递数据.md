---
title: [C#]FileSystemWatcher多线程间传递数据
---
---
title: [C#]FileSystemWatcher多线程间传递数据
---

1. 使用ThreadStart()委托

   线程执行带参数的方法

   ```c#
   new Thread(new ThreadStart(delegate { ThreadTask(firstPage, lastPage); }));
   ```

   看起来比较别扭

2. 使用System.Threading.ParameterizedThreadStart(Object obj)

   **原型**

   ```C#
   // 表示在 System.Threading.Thread 上执行的方法。
   // 参数:   obj:  包含该线程过程的数据的对象。
   [ComVisible(false)]
   public delegate void ParameterizedThreadStart(object obj);

   参数在ThreadName.Start(Object obj)中传入..obj就是要传入的参数,可以以数组的形式传入多个参数
   ```

   **使用**

   ``` C#
   //create a new Thread to read txt
   Thread readTextThread = new Thread(new ParameterizedThreadStart(ReadText));
   readTextThread.Start(e.FullPath);

   private static void ReadText(object obj)
   {
       //do sth with obj
       throw new NotImplementedException();
   }
   ```
