// 入口文件，可以简单的用 node 方式去执行算法

// dataStructure
const {
    Arrary,
} = require('./dataStructure');


// sortingAlgorithm

const {
    bubbleSort,
    bubbleSortFunctionWay,
} = require('./sortingAlgorithm');



// runtime tools
const {
    testType,
    countTime,
    consoleColor,
    formArrary,
} = require('./tools');



// you can run here
countTime(bubbleSort, [formArrary(100)]);