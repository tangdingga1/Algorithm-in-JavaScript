/**
 * 冒泡排序
 * 依次比较相邻两个元素，求出较大值放到后面元素，每冒泡一次会求出一次
 * 最大值
 * @param {Array} unsortedArray 需要进行排序的数组
 * @return {Array} 排序完的数组
 */
function bubbleSort(unsortedArray) {
    // 外层控制循环数组n
    for (let i = 0; i < unsortedArray.length; i++) {
        // 内层让每次循环进行冒泡操作
        for (let j = 0; j < unsortedArray.length - i; j++) {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
                [unsortedArray[j], unsortedArray[j + 1]] = [unsortedArray[j + 1], unsortedArray[j]];
            }
        }
    }
    return unsortedArray;
}

// 实际上过程可以更加的优雅,可以抽象出一个过程，从a到b的便利执行函数
function eachInterval(interval, callback) {
    const { start, end } = interval;
    for (let i = start; i < end; i++) {
        callback(i);
    }
}

function bubbleSortFunctionWay(array) {
    const unsortedArray = array;
    eachInterval(
        {
            start: 0,
            end: unsortedArray.length,
        },
        (i) => eachInterval(
            {
                start: 0,
                end: unsortedArray.length - i,
            },
            (j) => {
                if (unsortedArray[j] > unsortedArray[j + 1]) {
                    [unsortedArray[j], unsortedArray[j + 1]] = [unsortedArray[j + 1], unsortedArray[j]];
                }
            }
        ),
    );
    return unsortedArray;
}

module.exports = {
    bubbleSort,
    bubbleSortFunctionWay,
}