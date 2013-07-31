## demo
    githook -p 9090 -g http://gitlab.alibaba-inc.com/webapp/document.git -d document

## usage
     $ githook  -h

       Usage: main.js [value ...]

       Options:

         -h, --help               output usage information
         -V, --version            output the version number
         -p, --port <n>           http server port,default is 80
         -g, --git <n>            监听的git仓库地址
         -d, --dir <string>       目录位置
         -l, --url <string>       post到服务端的url
         -u, --user <string>      用户名
         -s, --password <string>  密码

