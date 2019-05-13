
const getStyleConsoleString = require('./console');

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
        cyan: 'function start ',
        grey: ' you int ',
        cyanBG: functionArguments,
    }));
    const result = countFunction.apply(this, functionArguments);
    console.log(getStyleConsoleString({
        cyan: 'function finsh in ',
        blueBG: new Date().getTime() - startTime + 'ms ',
        grey: ' you got ',
        cyanBG: result,
    }));
}

module.exports = timeDecorator;