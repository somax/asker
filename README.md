# Asker
## 通过命令行输入获得参数

## install
    npm install somax/asker

## usage
    var Asker = require('asker');
    var asker = new Asker(function (result) {
         console.log('result:',result);
    });
    asker.ask('name','pass');