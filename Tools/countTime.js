
const getStyleConsoleString = require('./consoleColor');

// 计算函数运算时间的方法,用来计算执行时间
/**
 * 
 * @param {Function} countFunction 计算时间的目标函数
 * @param {Array} functionArguments 目标函数的参数
 * @return void
 */
function timeDecorator(countFunction, functionArguments) {
    const startTime = new Date().getTime();
    console.log(getStyleConsoleString({
        yellowBG: '==========function start==========\n',
        grey: ' you int \n',
        magenta: functionArguments + '\n',
    }));
    const result = countFunction.apply(this, functionArguments);
    console.log(getStyleConsoleString({
        yellowBG: '==========function finsh in ' + (new Date().getTime() - startTime) + 'ms ==========\n',
        grey: ' you got \n',
        magenta: result,
    }));
}

module.exports = timeDecorator;