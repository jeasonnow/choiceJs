# choiceJs

## 为何选择choiceJs

### 一切都怪if...else
- `if...else`过于庞大导致无法维护
- `if...else`繁杂的嵌套让人摸不清头脑
```
if (...) {
  if (...) {
    if (...) {
      if (...) {

      }
    }
  }
} else {
  if (...) {
    if (...) {
      if (...) {

      }
    }
  }
}
```
### choiceJs的处理 
- 链式调用
- 显式声明

## 怎样使用

### install
```
$ npm install choice
```

### import or require
```
// es module
import { Choice } from 'choice'
```

```
// commonJs
const Choice = require('choice').Choice;
```

### add(description: string, condition: boolean, callback: any, extend?: string)
为你的决策树增加一个决策
```
/**
* description: 对于决策的描述（用于继承）
* condition: 决策的判断条件
* callback: 满足决策的回调事件
* extends: 继承于哪个决策（使用决策描述）
**/
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

### use()
使用决策树

当你使用add增加决策后，决策树并不会执行，你需要使用`use`方法让整个决策树`动`起来。

```
judgeTree.use();
```
