const testType = {

    testBoolean  : val => typeof val === 'boolean',
 
    testNumber   : val => typeof val === 'number',
 
    testString   : val => typeof val === 'string',
 
    testFunction : val => typeof val === 'function',
    
    testObject   : val => Object.prototype.toString.call(val) === '[object Object]',

    testArray    : val => Object.prototype.toString.call(val) === '[object Array]'
}













module.export = {
    testType
}