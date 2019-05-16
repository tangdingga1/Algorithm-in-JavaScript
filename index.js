// 入口文件，可以简单的用 node 方式去执行算法

// runtime tools
const {
    testType,
    countTime,
    consoleColor,
    formArray,
} = require('./tools');

// dataStructure
const {
    Array,
} = require('./dataStructure');

// sortingAlgorithm
const {
    bubbleSort,
    bubbleSortFunctionWay,
    selectionSort,
    quickSortBase,
    quickSortInPlace,
} = require('./sortingAlgorithm');


// you can run here
countTime(selectionSort, [formArray(10)]);