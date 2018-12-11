const assert = require('chai').assert;
const path = require('path');
const deploy = process.env.deploy || 'false';

const testPath = deploy === 'true' ? path.join(__dirname, '../deploy/index.js') : path.join(__dirname, '../dist/index.js');

const choiceLib = require(testPath);
const utils = choiceLib.utils;
const Choice = choiceLib.Choice;

describe('utils', function() {
  describe('#compose', function() {
    it('should return arg => arg when args empty', function() {
      assert.equal(1, utils.compose()(1));
    })
    it('should return funcs[0] when funcs length equals 1 and funcs is function', function() {
      const testFunc = function(arg) {
        return arg * 2;
      };
      assert.equal(testFunc(2), utils.compose(testFunc)(2));
    })
    it('should return function when normal use', function() {
      const testFunc = function(arg) {
        return arg * 2;
      };
      assert.equal('function', typeof(utils.compose(testFunc)));
    })
  })
});

describe('Choice', function() {
  describe('#traversalChoiceTree', function() {
    it('should return object when use', function() {
      const testTree = {
        condition: true,
        description: 'test',
        callback: () => { console.log('bingo') }
      };
      const testChoice = {
        condition: true,
        description: 'testChild',
        extends: 'test',
        callback: () => { console.log('bingo child') }
      };

      assert.equal('object', typeof(Choice.traversalChoiceTree(testTree, testChoice)));
    })
  })
  describe('#getRunProcess', function() {
    it('should return array when use', function() {
      const testTree = {
        condition: true,
        callback: () => {},
        description: 'father',
        childrenCondition: [
          {
            condition: true,
            description: 'child',
            callback: () => {},
          }
        ]
      };

      assert.equal(true, Array.isArray(Choice.getRunProcess(testTree)));
    })
  })
})