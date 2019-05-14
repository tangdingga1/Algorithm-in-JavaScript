
/**
 * 生成随机数数组
 * @param {Number} arraryLength 需要生成数组的长度
 */
function formRandomArrary(arraryLength) {
    return new Array(arraryLength).fill(0).map(item => parseInt(Math.random() * 1000));
}

module.exports = formRandomArrary;


