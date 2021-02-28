if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m004']=[{"name":"01-超简单shadowsocks翻墙教程.md","path":"004-随笔杂记/01-超简单shadowsocks翻墙教程.md","content":"# 给小白的超简单shadowsocks翻墙教程(备用教程)\r\n\r\n# 问题\r\n\r\n❓如果对文章有任何疑问可以提到:https://github.com/zhaoweih/Shadowsocks-Tutorial/issues\r\n\r\n# 前言\r\n\r\n  由于秋水逸冰大佬的退出，所以旧教程使用的一键安装shadowsocks脚本可能在未来的某一天也不管用了。出于这个原因，我又写了一篇文章用来给大家作为备用教程，这篇文章使用的是[Google Jigsaw](https://jigsaw.google.com/)团队制作的同样也是shadowsocks的一键脚本，由于是Google制作，所以迫于某些压力退出的可能性不大，个人认为可以作为长期的备用教程。\r\n\r\n# 开始\r\n\r\n## 购买VPS服务器\r\n\r\n俗话说，万事起头难。想想倒也是这样，也不是说购买VPS服务器有多难，是接受它比较难，我当时也是一个还没买过服务器的小白，对于第一次尝试的东西都没有底，怎么敢随意下手。好了，你现在可以放心了，据我使用，Vultr和DigitalOcean这两个服务商都是可以随时部署随时摧毁服务器，是按每小时计费的，一个月是5美金，大概0.007美金一小时，就算你创建一个服务器IP刚好是被某墙屏蔽了，那就删掉也只是扣0.1美金，作为一个穷学生的我都能接受了，你还犹豫吗？\r\n\r\n### 1、注册并登录\r\n\r\nVultr推荐链接：https://www.vultr.com/?ref=7370522\r\n\r\n这里我比较推荐Vultr，为什么呢？因为他有日本服务器，延迟低，掉包也低；注册登录后先充值5美金，用paypal绑定国内银行卡可以最低充值5美金，当然也有支付宝，支付宝要最低10美金。\r\n\r\n![](./images/1.png)\r\n\r\n### 2、部署服务器\r\n\r\n第一步：在个人页面点击Products然后再点右面的➕号按钮添加一个服务器\r\n\r\n![](./images/2.png)\r\n\r\n第二步：在打开的页面选择德国Frankfurt服务器（由于日本服务器滥用导致很多IP被封了，可以选择欧洲服务器，例如法国、德国等），如果喜欢其他服务器也可以选择，后续操作是一样一样的\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/de.png)\r\n\r\n第三步：接下来要注意了，系统最好选择Debian，点击**Debian**可以下拉选择**10 x64**（建议和我选择一样，避免问题出现）\r\n\r\n![](./images/system_select_debian.png)\r\n\r\n第四步：选择套餐，当然ss不需要配置太高的服务器，最低配置5美金一个月的就可以了，反正我每次看2.5美金都是卖光的，如果你能看到那赶紧选啊，千年一遇。\r\n\r\n![](./images/5.png)\r\n\r\n第五步：接着就是部署起来了，当然你也可以给服务器起个名字再部署\r\n\r\n![](./images/6.png)\r\n\r\n第六步：接着等待服务器启动完成，看到Status是绿色的Running就是启动完成了，这个过程大概需要1-3分钟。\r\n\r\n![](./images/7.png)\r\n\r\n第七步：复制IP地址和密码，后面有用\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/5.png)\r\n\r\n第八步：启动完成后，当然测试一下有没有被封掉IP了，打开命令管理器或者终端，输入 ping+你的IP地址(对应上图的IP Address)，例如我服务器IP是78.141.197.87，则ping 78.141.197.87，如果出现下图的返回信息则这个IP是可以用的，偶尔一个request timeout也是可以的，是掉包现象，如果出现一直request timeout就把这服务器删掉重新部署吧。\r\n\r\n![](./images/10.png)\r\n\r\n好了，到此为止最困难的事情已经过去了，后面都是一键式的了，喝杯茶🍵再继续。\r\n\r\n## 在服务器安装ss\r\n\r\n因为我是用mac的，考虑到大多数人还是使用windows为主，我就把我的旧电脑给翻出来开机继续做教程。基于windows 7。\r\n\r\n- **如果你是用mac，那恭喜你，下面连接的步骤直接打开终端输入**\r\n\r\n`ssh root@你的服务器IP地址`\r\n\r\n**连接就可以，然后可以跳过安装并运行xshell这个步骤**\r\n\r\n\r\n\r\n- **如果你是用windows10,可以打开系统自带的powershell工具:**\r\n\r\n\r\n\r\n\r\n\r\n![](./images/powershell_windows_menu.png)\r\n\r\n**输入**\r\n\r\n`ssh root@你的服务器IP地址`\r\n\r\n![](./images/powershell_run.png)\r\n\r\n**连接就可以（注意密码粘贴需要使用鼠标右键），然后可以跳过安装并运行xshell这个步骤**\r\n\r\n### 安装并运行xshell\r\n\r\n**提示：如果服务器可以ping通，但xshell无法连接说明服务器被封端口了（很多vultr日本服务器有这种状况），请更换其他地区服务器或者更换服务器商**\r\n\r\nwindows下ssh连接需要下载Xshell，百度搜一搜就能下载了，当然你也可以用其他的，这里以Xshell为例，安装好Xshell后点击文件-新建\r\n\r\n![](./images/w-1.png)\r\n\r\n接下来配置连接,名称随便起，主机填写你的服务器IP地址，下面都默认就好\r\n\r\n![](./images/w-2.png)\r\n\r\n接下来在弹出的窗口填root（默认服务器用户名）\r\n\r\n![](./images/w-3.png)\r\n\r\n这里就要填入你在上篇复制的服务器密码了\r\n\r\n![](./images/w-4.png)\r\n\r\n### 安装ss\r\n\r\n上面登录成功后如图所示\r\n\r\n![](./images/w-5.png)\r\n\r\n下面就是整个教程最重要的部分了，感谢Google团队制作的outline（制作的初衷是为了让记者更安全发布新闻的，由于同样使用shadowsocks，所以可以用于翻墙）。\r\n\r\n``` bash\r\nsudo bash -c \"$(wget -qO- https://raw.githubusercontent.com/Jigsaw-Code/outline-server/master/src/server_manager/install_scripts/install_server.sh)\"\r\n```\r\n\r\n复制粘贴上面代码到xshell，在xshell要右键粘贴，然后敲回车键，然后就会有一串不知名代码蹦出，停在这里了，这里的意思是问你是否需要安装Docker，输入y回车就行。\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/13.png)\r\n\r\n这里可能需要等待一会，看到下图就是大功告成了。干杯🍻！复制绿色的那段代码保存起来，后面会用到！\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/14.png)\r\n\r\n## 下载服务端管理器\r\n\r\nwindows版：https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/manager/stable/Outline-Manager.exe\r\n\r\nmac版：https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/manager/stable/Outline-Manager.dmg\r\n\r\nLinux版：https://raw.githubusercontent.com/Jigsaw-Code/outline-releases/master/manager/stable/Outline-Manager.AppImage\r\n\r\n这里以windows为例，下载后安装完成后选择第四个 set up outline anywhere\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/10.png)\r\n\r\n将上面保存的绿色代码粘贴到第二个输入框内，然后选择done\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/15.png)\r\n\r\n添加完服务器后选择加号(Add new key)，添加一个key\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/16.png)\r\n\r\n名字可以随便起，例如我是在家里用的，叫home，接着点击右方的分享按钮\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/17.png)\r\n\r\n最后找到copy access key，复制保存蓝色选择部分\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/18.png)\r\n\r\n## 下载客户端\r\n\r\n虽然outline有很多平台的客户端，但是不建议使用outline作为客户端，因为没有pac功能，导致所有流量都会经过服务器，上国内网站会比较慢。客户端推荐使用shadowsocks官方客户端。\r\n\r\n下面是各个终端的下载地址（我用过Windows,MAC,Android,IOS操作起来都是差不多的。）：\r\n\r\nWindows：https://github.com/shadowsocks/shadowsocks-windows/releases\r\n\r\nAndroid:https://github.com/shadowsocks/shadowsocks-android/releases\r\n\r\nMAC:https://github.com/shadowsocks/ShadowsocksX-NG/releases\r\n\r\nLinux:https://github.com/shadowsocks/shadowsocks-qt5/wiki/Installation\r\n\r\nIOS: \r\n\r\n由于国区APP下架VPN类APP，包括支持ss类的APP，所以需要切换账号\r\n\r\n建议注册一个国外账号，不要国内账号换区，这样既可以需要下载国内APP时切换国区账号，需要下载国外APP时切换外区账号。\r\n\r\n**建议不想折腾的可以淘宝买一个国外App Store账号，便宜方便快捷**\r\n\r\n步骤：\r\n\r\n1.获取一个国区以外的账号\r\n\r\n注册国外appid教程：https://www.zhihu.com/question/26458172\r\n\r\n（相关注册外区账号教程很多，可以自行搜索）\r\n\r\n**由于苹果的新政策，注册apple id在付款方式选择的时候非当地ip无法选择none选项，例如我注册英国区账号，需要ip为英国才可以。即在注册时要搭梯子，对应ip注册。**\r\n\r\n2.在APPStore中切换为国区以外账号\r\n\r\n3.在AppStore搜索**Potatso Lite**安装\r\n\r\n注：或者其他支持shadowsocks的APP也可以，这里比较推荐Potatso Lite\r\n- [Potatso Lite](https://itunes.apple.com/us/app/potatso-lite/id1239860606?mt=8)\r\n\r\n下面以windows为例演示：\r\n\r\n安装完成后打开应用  \r\n\r\n确保你已经复制了上文蓝色部分内容，然后右击小飞机，选择服务器-从剪贴板导入URL\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/19.png)\r\n\r\n接着点击确定\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/20.png)\r\n\r\n最后确保打开了PAC模式\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/21.png)\r\n\r\n- 这里简要说一下PAC模式和全局模式问题：\r\n\r\nPAC模式就是访问国内网站会走国内IP，访问被封的网站走服务器IP\r\n\r\n全局就是全部走服务器IP\r\n\r\n这里建议选择PAC模式，PAC的地址都是保存在[gfwlist](https://github.com/gfwlist/gfwlist)\r\n\r\n希望大家遇到PAC无法访问的网站多上去提issues。\r\n\r\n### 神圣时刻\r\n\r\n接着最神圣的时刻来了，在浏览器输入google.com，回车，蹦，谷歌回来了\r\n\r\n![](./images/super_easy_shadowsocks_tutorial/22.png)","timestamp":1614495166451}]