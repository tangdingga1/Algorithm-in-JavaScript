// 数组中指定一个元素作为标尺，比它大的放前面，比它大的放后面,不断递归的过程
function quickSortBase(unSortArray) {
    // 递归终止条件
    if (unSortArray.length < 2) {
        return unSortArray;
    }
    // 标尺元素
    let flag = unSortArray[0];
    // 根据标尺分区
    const sortArray = {
        minThanFlag: [],
        maxThanFlag: [],
    };
    // 循环
    unSortArray.slice(1).forEach(item => {
        sortArray[item < flag ? 'minThanFlag' : 'maxThanFlag'].push(item);
    });
    return quickSortBase(sortArray.minThanFlag).concat([flag], quickSortBase(sortArray.maxThanFlag));
}


// in place 的快速排序
// 仍然是一个标尺，数组内部进行交互，不占用额外的空间。
// 找到标尺，把比这个标尺小的，放到这个标尺的下一位进行排列，一直到遍历完全，中途记录下位置。最后让标尺和记录下的位置进行交换。
// 暴露给外部的借口仅仅是一个未排序的数组即可
function quickSortInPlace(unSortArray) {

    /**
     * partition, 根据区间去划分交换数组的过程，最后返回划分标识
     * @param {Array} unSortArray 
     * @param {*} leftIdx 左下标，标志数组的标尺位置 
     * @param {*} rightIdx 右下标，标志遍历数组的结束位置
     * @return {Array} 排序完毕的数组
     */
    function partition(unSortArray, leftIdx, rightIdx) {
        let flag = leftIdx + 1;
        // 到边界值
        for (let i = flag; i <= rightIdx; i++) {
            if (unSortArray[i] < unSortArray[leftIdx]) {
                // 交换的是标尺的位置
                [unSortArray[flag], unSortArray[i]] = [unSortArray[i], unSortArray[flag]];
                // 标尺需要移动一位
                flag++;
            }
        }
        [unSortArray[leftIdx], unSortArray[flag - 1]] = [unSortArray[flag - 1], unSortArray[leftIdx]];
        return flag;
    }
    
    (function sort(unSortArray, leftIdx, rightIdx) {
        if (leftIdx < rightIdx) {
            const partitionIdx = partition(unSortArray, leftIdx, rightIdx);
            // 循环完毕后，下标和左侧互换
            sort(unSortArray, leftIdx, partitionIdx - 1);
            sort(unSortArray, partitionIdx, rightIdx);
        }

    })(unSortArray, 0, unSortArray.length - 1);

    return unSortArray;
}


module.exports = {
    quickSortBase,
    quickSortInPlace,
}