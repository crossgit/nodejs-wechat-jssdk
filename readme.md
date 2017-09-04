## 使用
1. 下载后,根目录下添加一个 `wechat.config.js`的配置文件,内容如下,针对具体公众号更改配置

        module.exports = {
            grant_type: 'client_credential',
            appid: 'wx29c796418c33929',
            secret: '98349adkkde55de8a2d0d57e8e4f890b3',
            noncestr: 'ufbnRaTcLacF0HInS7a93jskc3MpyrLB',
            accessTokenUrl: 'https://api.weixin.qq.com/cgi-bin/token',
            ticketUrl: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
            cache_duration: 1000 * 60 * 60 * 24
        }

2. 在`package.json`同目录下执行,就是根目录,可能需要翻墙

        npm i
        npm start

在浏览器中输入 `http://localhost:3000` 浏览器 

'index.1.html' 忘记是什么时候的备份.

## 目录介绍,`public`是静态文件,其他的都是服务端文件...

## 正式处理

1. 停止`debugger` ,index.html 26行 改成false

2. 在微信公众号里绑定安全带域名

3. 把该项目文件全部发布到服务器,然后代理域名和这个安全域名一致

这样基本上就通了.还不通就留言..
    