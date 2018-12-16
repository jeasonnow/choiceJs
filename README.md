#### choicejs
[![Build Status](https://travis-ci.org/jeasonnow/choiceJs.svg?branch=master)](https://travis-ci.org/jeasonnow/choiceJs)
[![Build version](https://img.shields.io/badge/npm-v1.1.1-green.svg)](https://github.com/jeasonnow/choiceJs)

##### install
你可以通过`yarn`或者`npm`安装`choicejs`
```
$ npm install choicejs
$ yarn add choicejs
```

#### require or import
```
const choicejs = require('choicejs').Choice;

import { Choice } from 'choicejs'
```

####  usage

> add(description: string, condition: boolean, callback: any, extend?: string)

该方法是用来增加你的选择的，有四个参数，`description`代表你对当前选择的描述，该项千万不要重复，否则后面增加的选择会覆盖之前的，第二个选项就是判断条件，第三个代指满足判断条件时的回调方法，最后一个参数为可选参数，代指继承于某项描述，就好比嵌套的`if...else`嵌套于某个条件一样。

一个栗子：
```
const judgeTree = new Choice();

const logAisBiggerThan1() {
  console.log('a > 1')
};

const logAisSmallerThan9() {
  console.log('a < 9');
}

const a = 3;

judgeTree
  .add('biggerThan1', a > 1, logAisBiggerThan1)
  .add('smallerThan9', a < 9, logAisSmallerThan9, 'biggerThan1')
```

> use()

简单暴力的方法，`add`用来定义，而`use`就是用来执行。如果没有`use`，那么定义好的决策树就像是一个定义好的函数，没有`()`它就毫无卵用~

栗子：
```
judgeTree.use();

// 注意，judgeTree 是支持链式调用的，所以放心大胆地将 use() 接在 add() 之后使用吧~
```

> destroy()                                 

简单的销毁方法，使用完之后可以选择清空当前实例中的所有信息，通常作为最后一步使用，在此就不举例啦~
