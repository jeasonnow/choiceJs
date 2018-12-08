interface choiceItem {
  condition: boolean,
  callback: any,
  childrenCondition?: Array<choiceItem>,
  extends?: string,
  description: string
}

interface choice {
  choices: Array<object>
}

interface Choice {
  constuctor: any,
  add: any,
  use: any,
  destrouy: any
}

export { choiceItem, choice };