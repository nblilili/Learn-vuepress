# 工时统计报表

## 简介

> 公司项目工时统计,最终以Excel报表的形式展现
>
> 最终解决方案的代码地址:https://github.com/nblilili/aras_manhour_report

## Step1:需求确定

1. 将一个月的工时数据统计成一份报表

2. 如下:

   ![](https://raw.githubusercontent.com/nblilili/pic/master/pic/20181205150130.png)

## Step2:设计

1. 在界面上选择日期,精确到月即可...比如2018/11
2. 然后点击报表生成
3. 生成报表

## Step3: 实现思路

1. 通过界面上获取的日期判断查询的月份

2. 然后访问数据库

3. 根据项目查询

4. 然后找出某个项目的所有数据

5. 以莱尼为例:

   sql如下:

   ````sql
   SELECT TOP 1000 a.[SOURCE_ID]
         ,a.[PROJECT_NAME]
         ,a.[PROJECT_TIME]
         ,a.[PROJECT_COMMENT]
   	  ,b.MY_NAME
   	  ,b.WORKING_DATE
     FROM [laurel].[innovator].[LAUREL_PROJECT_AND_TIME] a 
     Left Join laurel.innovator.MANHOUR_REGISTER b on b.CONFIG_ID = a.SOURCE_ID where a.PROJECT_NAME = '莱尼运维合同' 
     and b.WORKING_DATE > '2018-11-1' and b.WORKING_DATE <'2018-12-1'
   ````

   数据如下:

   ````sql
   SOURCE_ID	PROJECT_NAME	PROJECT_TIME	PROJECT_COMMENT	MY_NAME	WORKING_DATE
   003A13B3101140DFA21911FC9A8C7194	莱尼运维合同	4	NULL	lvzhongwen	2018-11-13 05:00:00.000
   048B3546DF0D4487A5B70B019F430251	莱尼运维合同	1.5	NULL	yangsiyuan	2018-11-09 05:00:00.000
   0579CC19D7034289AC16D2F3B4D8030B	莱尼运维合同	2	NULL	yangsiyuan	2018-11-02 04:00:00.000
   2CCF0AE0040744CDB82CE853D9CD08A4	莱尼运维合同	4	NULL	yangsiyuan	2018-11-01 04:00:00.000
   3C5433FFD30D4D34BCD6ED89189E1343	莱尼运维合同	4	NULL	yangsiyuan	2018-11-04 04:00:00.000
   4556E743C38B4B29824A3E6C6DB1E7AA	莱尼运维合同	4	NULL	lvzhongwen	2018-11-15 05:00:00.000
   47DA325ED0D34656A61FE6E99B6A5BAB	莱尼运维合同	1.5	NULL	yangsiyuan	2018-11-05 05:00:00.000
   49048E84BC88402A85909972A59CA5CA	莱尼运维合同	0.5	NULL	wuxiaowei	2018-11-01 04:00:00.000
   52FE03B7F6F34967AE3B1C8DE400907D	莱尼运维合同	1	NULL	wuxiaowei	2018-11-05 05:00:00.000
   7204083820144ED48ACDD720C4615A2F	莱尼运维合同	4	NULL	lvzhongwen	2018-11-01 04:00:00.000
   9F0AA2244CB845209555414895104718	莱尼运维合同	2	NULL	wuxiaowei	2018-11-12 05:00:00.000
   AA6A0668F6194F7F972C34FE7F78D322	莱尼运维合同	2.5	NULL	yangsiyuan	2018-11-08 05:00:00.000
   B3C31B119D764C96B13BBD4269E04882	莱尼运维合同	4	NULL	lvzhongwen	2018-11-12 05:00:00.000
   BDBC995F81704DEBBAFE2822B0C23BD2	莱尼运维合同	2	NULL	lvzhongwen	2018-11-19 05:00:00.000
   CE80355832394F0499D3C0AD5C5F5F42	莱尼运维合同	1	NULL	lvzhongwen	2018-11-16 05:00:00.000
   D9623401EDB84117BA1820CD82B640EA	莱尼运维合同	1	NULL	yangsiyuan	2018-11-07 05:00:00.000
   FF801D5706E74C1C9E6A72CD8EC17FA6	莱尼运维合同	2	NULL	lvzhongwen	2018-11-06 05:00:00.000
   ````


6. 生成Excel
7. 以'莱尼'为页签
8. 设置纵坐标为11月的30天.横坐标为在表中出现的人名,表中的数据为工时
9. **关键在于如何根据时间和姓名找到对应的工时数据**

## Step4:开发

1. 新建一个 Form项目,语言是C#

   界面如下:

   ![](https://raw.githubusercontent.com/nblilili/pic/master/pic/20181205150153.png)

2. 双击确定,新建点击事件的方法

3. 想要新建Excel.先添加引用.右键`引用`点击`添加引用`

   ![](https://raw.githubusercontent.com/nblilili/pic/master/pic/20181205150217.png)

   然后选择:

   ![1542870189533](C:\Users\nblil\AppData\Roaming\Typora\typora-user-images\1542870189533.png)

4. 生成表格的代码如下

   ```c#
   //获取访问数据库的数据
   HashSet<string> nameSet = new HashSet<string>();
   for (int i = 0; i < sqlResult.getItemCount(); i++)
   {
       nameSet.Add(sqlResult.getItemByIndex(i).getProperty("my_name"));
   }
   Excel.Application oXL;
   Excel._Workbook oWB;
   Excel._Worksheet oSheet;
   try
   {
       //启动Excel并获取应用程序对象
       oXL = new Excel.Application();
       oXL.Visible = true;
   
       //数据选项菜单
       oWB = (Excel._Workbook) (oXL.Workbooks.Add(Missing.Value));
       oSheet = (Excel._Worksheet) oWB.ActiveSheet;
   
       //逐单元添加表标题
       oSheet.Cells[1, 1] = "日期 姓名";
       
       //纵坐标
       for (int i = 0; i < dtCount; i++)
       {
           oSheet.Cells[i + 2, 1] = dt.Year+"-"+dt.Month+"-"+(i+1);
       }
       //横坐标
       for (int i = 0; i < nameSet.Count; i++)
       {
           oSheet.Cells[1, i + 2] = nameSet.ElementAt(i);
       }
       //遍历整个结果集,将结果填写到相应的位置
       for (int i = 0; i < sqlResult.getItemCount(); i++)
       {
           Item hoursItem = sqlResult.getItemByIndex(i);
           string myName = hoursItem.getProperty("my_name");
           string dateTimeStr = hoursItem.getProperty("working_date");
           int y = -1;
           //遍历所有的名字
           for (int j = 0; j < nameSet.Count; j++)
           {
               if (myName.Equals(nameSet.ElementAt(j)))
               {
                   y = j + 2;
               }
           }
           if (y == -1)
           {
               MessageBox.Show("程序出错啦");
               return;
           }
           DateTime dateTime = DateTime.Parse(dateTimeStr);
           int day = dateTime.Day;
           //设置y
           int x = day + 1;
           string hour = hoursItem.getProperty("project_time");
           oSheet.Cells[x, y] = hour;
       }
       //Format A1:D1 as bold, vertical alignment = center.
       oSheet.get_Range("A1", "D1").Font.Bold = true;
       oSheet.get_Range("A1", "D1").VerticalAlignment =
           Excel.XlVAlign.xlVAlignCenter;
   ```

5. 查阅设置单元格属性的代码,对单元格格式进行进一步的修改

   https://my.oschina.net/ind/blog/262749

6. 到此为止单一的Sheet已经结束了

7. 下面将所有的数据查询出来,建成多个Sheet

8. 思路就是建立以`项目名`为key的,对应`Item`(即对应的数据)为value的Dictionary(与java中的hashMap类似,语法有细微差别)

9. 然后每个项目建立一个`Sheet`重命名成`项目名`,关键代码如下:

   ```
   oXL.Sheets.Add(Missing.Value, Missing.Value, Missing.Value, Missing.Value);
   oSheet = (Excel._Worksheet)oWB.ActiveSheet;
   oSheet.Name = name;
   ```


10. 最后调用生成当表格的方法
11. 完成解决方案的代码地址:https://github.com/nblilili/aras_manhour_report
12. 与最终程序生成的Excel:

