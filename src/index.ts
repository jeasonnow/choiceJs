import * as utils from './utils';

interface choiceItem {
  condition: boolean;
  callback: any;
  childrenCondition?: Array<choiceItem>;
  extends?: string;
  description: string;
}

class Choice {
  choices: Array<choiceItem>;
  constructor() {
    this.choices = [];
  }
  add(
    description: string,
    condition: boolean,
    callback?: any,
    extend?: string
  ): any {
    let newChoice: choiceItem = {
      callback: callback || function() {},
      condition,
      description
    };
    if (extend && this.choices.length > 0) {
      newChoice.extends = extend;
      for (let index in this.choices) {
        this.choices[index] = Choice.traversalChoiceTree(
          this.choices[index],
          newChoice
        );
      }
    } else {
      this.choices.unshift(newChoice);
    }

    return this;
  }
  use(): any {
    const choices: Array<choiceItem> = this.choices.slice(0);
    const processArray = choices.map(
      (choice: choiceItem): Array<any> => {
        return Choice.getRunProcess(choice);
      }
    );

    const useFunc = utils.compose(processArray);

    useFunc();

    return this;
  }
  static traversalChoiceTree(tree: choiceItem, choice: choiceItem): choiceItem {
    const finalTree: choiceItem = { ...tree };
    const extend: string = choice.extends;

    if (finalTree.childrenCondition) {
      if (finalTree.description === extend) {
        finalTree.childrenCondition.push(choice);
      } else {
        for (let index in finalTree.childrenCondition) {
          finalTree.childrenCondition[index] = Choice.traversalChoiceTree(
            finalTree.childrenCondition[index],
            choice
          );
        }
      }
    } else {
      if (finalTree.description === extend) {
        finalTree.childrenCondition = [choice];
      }
    }

    return finalTree;
  }
  static getRunProcess(
    choice: choiceItem,
    processArray?: Array<any>
  ): Array<any> {
    processArray = processArray || [];
    const choicesClone: choiceItem = { ...choice };

    if (!choicesClone.childrenCondition) {
      if (choicesClone.condition) {
        processArray.unshift(choicesClone.callback);
      }
    } else {
      if (choicesClone.condition) {
        processArray.unshift(choicesClone.callback);
        for (let index in choicesClone.childrenCondition) {
          const childrenProcess = Choice.getRunProcess(
            choicesClone.childrenCondition[index]
          );
          processArray.unshift(childrenProcess);
        }
      }
    }

    return processArray;
  }
  destroy() {
    this.choices = [];
  }
}

export default {
  Choice,
  utils
};
