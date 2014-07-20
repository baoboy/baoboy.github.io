---
layout: post
category: ios
title: Swift 初体验
description: ""
modified: 2014-06-06
tags: [ios, swift]
comments: true
share: true
comments: true
---

Swift 初体验
-

## 介绍
Swift是WWDC 2014上发布的一款新编程语言，要在未来取代Objective-C成为Mac、IOS开发的主要语言。  
苹果要大力推Swift，Swift可以说必火无疑。

## HelloWorld

使用XCode6创建一个Command Line Tool项目，Language选择Swift。

会自动创建一个main.swift文件，打开文件，发现代码异常简单，只有两行。

```swift
import Foundation
 
println("Hello, World!")
```

第一句import去掉也是可以的，swift一眼看上去最大的不同有两点，第一不需要main入口，类似于脚本语言，还有个让我很不好受的地方，就是不用敲分号了，这个真的很难适应，不过敲上分号也是不会报错的。

第一句导入了Foundation框架，Foundation肯定不会陌生，导入之后我们可以用NSString了，具体我们以后再谈。

println不说想必也知道，执行代码会打印Hellow World！。

## 数据类型

swift是弱类型的，使用var关键字声明变量，使用let关键字声明常量。

```swift
// 声明变量
var i = 1
// 修改变量的值
i = 10
 
// 声明常量，值不可修改
let c = 10
```

编译器会根据赋值自动分析其数据类型，不过有些情况我们也需要指定具体的数据类型，因为 1 这个数字可以是Int也可以是Double。指定数据类型的语法是 变量名 ：数据类型。

```swift
// 声明Int类型变量
var i:Int = 1
 
// 声明Double类型变量
var d:Double = 1
```

## 方法&函数

方法（我不喜欢叫函数）声明使用关键字 func

```swift
// 计算两个数的和
func add(a:Int, b:Int) -> Int{
    return a + b
}
```

使用 -> 指定返回值，在方法上swift有一个很好的特性：方法可以有多个返回值，-> 后面跟（），多个数据类型用’，’分割， return 后面也是用（）。

```swift
// 计算两个数的和以及差
func addAndSubtract(a:Int, b:Int) -> (Int, Int){
    return (a + b, a - b)
}
 
// 返回两个值
var (result1, result2) = addAndSubtract(10, 5)
 
println(result1)
println(result2)
```

方法还支持闭包，看来swift从javascript借鉴了不少。

```swift
// 使用闭包计算三个数的和
func fun1(a:Int, b:Int, c:Int) -> Int{
    func fun2() -> Int{
        return a + b;
    }
    return fun2() + c;
}
 
```

## 测试代码下载

[https://github.com/baoyongzhang/HelloSwift/](https://github.com/baoyongzhang/HelloSwift/)