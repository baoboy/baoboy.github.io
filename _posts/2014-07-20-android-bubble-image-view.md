---
layout: post
category: android
title: BubbleImageView
description: ""
modified: 2014-07-20
tags: [android, imageview]
comments: true
share: true
comments: true
---

BubbleImageView
===============

## 介绍

聊天中图片的气泡效果，类似于 IOS 中的消息的图片效果，图片的轮廓就是气泡的轮廓。

## 效果截图
<p>
   <img src="https://raw.githubusercontent.com/baoyongzhang/BubbleImageView/master/screenshot-1.png" width="320" alt="Screenshot"/>
   &nbsp;&nbsp;&nbsp;
   <img src="https://raw.githubusercontent.com/baoyongzhang/BubbleImageView/master/demo.gif" width="320" alt="demo"/>
</p>


## 使用方法

<com.baoyz.widget.BubbleImageView
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:padding="10dp"
      android:src="@drawable/pic"
      app:bubble_angle="20dp"
      app:bubble_arrowHeight="50dp"
      app:bubble_arrowLocation="right"
      app:bubble_arrowOffset="10dp"
      app:bubble_arrowTop="50dp"
      app:bubble_arrowWidth="30dp" />

## 属性介绍

* `bubble_angle` : 图片圆角的角度
* `bubble_arrowHeight` ： 气泡边上箭头的高度
* `bubble_arrowLocation` ： 气泡边上箭头的位置，目前支持 left 和 right
* `bubble_arrowOffset` ： 箭头上下的偏移量，正数 向上 ，负数 向下
* `bubble_arrowTop` ： 箭头距离顶部的距离
* `bubble_arrowWidth` ： 箭头的宽度

## 源码&实例

[https://github.com/baoyongzhang/BubbleImageView](https://github.com/baoyongzhang/BubbleImageView)
