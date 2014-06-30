---
layout: post
category: 搞机
title: Nexus 5 刷 Android L 以及 root
description: ""
modified: 2014-06-28
tags: [Nexus, Android L, root]
comments: true
share: true
comments: true
---

Nexus 5 刷 Android L 以及 root
-
Android L 提供下载当天就将 Nexus 5 刷入了 Android L，界面效果还不错吧，但是兼容性真是受不了。
  
既刷之则安之，我也不打算刷回去了，平时可以用 IPhone 救急，如果作为主力机还是建议不要刷 L 了~

* 注： 手机解锁等基本知识不在此讲解，从来没刷过的请勿尝试，先去网上取取经。  

##线刷 Android L

准备工作，下载 Nexus 5 的 L 刷机包，官方地址太慢，附上网盘地址！

* [请不要怜悯你的鼠标猛戳此处进入下载地址](http://yun.baidu.com/s/1i35i9CD)

下载之后解压， 手机进入 bootloader， 运行目录里的 flash-all.bat 即可一键刷入，稍安勿躁，就可以看到漂亮的开机界面啦， 首次开机需要几分钟的时间，以后开机会很的。

## 美图欣赏

<img src="https://raw.githubusercontent.com/baoboy/image.baoboy.github.io/master/2014-06/28-01.png" width="240"/>
<img src="https://raw.githubusercontent.com/baoboy/image.baoboy.github.io/master/2014-06/28-02.png" width="240"/>
<img src="https://raw.githubusercontent.com/baoboy/image.baoboy.github.io/master/2014-06/28-03.png" width="240"/>
<br/>
<img src="https://raw.githubusercontent.com/baoboy/image.baoboy.github.io/master/2014-06/28-04.png" width="240"/>
<img src="https://raw.githubusercontent.com/baoboy/image.baoboy.github.io/master/2014-06/28-05.png" width="240"/>

## ROOT

root步骤

* 刷入 recovery
* 安装 SuperSU
* 刷入 boot

还是附上网盘下载地址~

* [请不要怜悯你的鼠标猛戳此处下次 root 所需文件](http://pan.baidu.com/s/1mgHnN76)

现将 `UPDATE-SuperSU-v2.00.zip` 文件复制到手机 SD 中，手机进入 `bootloader`  

* 执行 `fastboot flash recovery rec.img` 刷入  `recovery`
* 进入 `recovery` 选择 install 安装 SD 中放入的 zip 文件  
* 执行 `fastboot flash boot boot.img` 刷入  `boot`  

执行完这三步， 你的 Nexus 5 应该就已经 root 了~
