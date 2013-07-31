#!/usr/bin/env node

exports.run = function (args) {

    var path = require('path'),
        fs = require('fs'),
        dir = args.dir,
        git = args.git,
        cmd = [],
        exec = require('child_process').exec;

    require('colours');

    // create a plugin
//    var absolutePath = path.join(path.dirname(fs.realpathSync(__filename)), dir);

    console.log(dir);

    if (!fs.existsSync(dir)) {
        //使用gitclone
        cmd.push("git clone " + git + " " + dir);
    }
    cmd.push("cd " + dir);
    cmd.push("git reset --hard");
    cmd.push("git pull origin master");
//    cmd.push("export LC_ALL=zh_CN.UTF-8");
//    cmd.push("export LANG=zh_CN.UTF-8");
    cmd.push("jekyll build");

    //TODO
//    cmd.push("tar -czf site.tgz _site");

    console.log(cmd.join("&&"));
    exec(cmd.join("&&"), function (err, stdout, stderr) {
        console.log(err);
        console.log(stdout.green);
        console.log(stderr);
        console.log("TODO: POST site.tgz to tfs and notify http server");
    })
}