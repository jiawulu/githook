#!/usr/bin/env node

//githook -p 9090 -g http://gitlab.alibaba-inc.com/webapp/document.git -d document

var program = require('commander'),
    argv = process.argv;

require('colours');

//定义参数,以及参数内容的描述
program.version('0.0.1')
    .usage('[value ...]')
    .option('-p, --port <n>', 'http server port,default is 80', parseInt)
    .option('-g, --git <n>', '监听的git仓库地址')
    .option('-d, --dir <string>', '目录位置')
    .option('-l, --url <string>', 'post到服务端的url')
    .option('-u, --user <string>', '用户名')
    .option('-s, --password <string>', '密码');

//解析commandline arguments
program.parse(argv);

if(program.port && program.git && program.dir ){
    require('./server').startServer(program);
}else{
    console.log("missing params, use githook -h".red)
}



