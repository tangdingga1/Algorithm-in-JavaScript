//检测是否属于某个基本类型，如果是，返回true
module.exports =  {
    testBoolean: val => typeof val === 'boolean',
    testNumber: val => typeof val === 'number',
    testString: val => typeof val === 'string',
    testFunction: val => typeof val === 'function',
    testObject: val => Object.prototype.toString.call(val) === '[object Object]',
    testArray: val => Object.prototype.toString.call(val) === '[object Array]',
}