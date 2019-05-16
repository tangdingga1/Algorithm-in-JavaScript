/**
 * 选择排序
 * @param { Array } unSortArr
 * @return { Array } 排序完毕数组
  */
function selectionSort(unSortArr) {
    for (let i = 0, temp; i < unSortArr.length; i++) {
        temp = i;
        for (let j = i + 1; j < unSortArr.length; j++) {
            if (unSortArr[j] < unSortArr[temp]) {
                temp = j;
            }
        }
        // 循环完毕后调到最小项
        [unSortArr[i], unSortArr[temp]] = [unSortArr[temp], unSortArr[i]];
    }
    return unSortArr;
}

module.exports = {
    selectionSort,
}