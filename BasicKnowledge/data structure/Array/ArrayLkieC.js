const {testType} = require('../../../Tools/Tools.js');


/**
 * 实现类C数组效果：
 * 特征1.存储一组具有相同类型的数据
 * 特征2.删除插入新的元素会搬运相邻数据
 * 
 * @dataType 接受string
 * 生成数组的类型，支持js数据类型， 
 * 基本类型 Boolean, Number, String
 * 引用类型 Object, Function, Array
 * 
 * @length 初始化数组的长度
 * 
 * @valArr 任意项的数组值数组
 */
function ArrayLkieC(dataType, length, ...valArr) {

    //检测是否使用new 关键字来试用函数
    if(new.target === undefined) {
        throw new Error('you should use new to init this function');
    }

    this.dataType = dataType;
    this.length = length;
    this.initValArr = valArr;
    this.init();
}

ArrayLkieC.prototype.testDataType = function() {
    //检测dataType是否符合规范
    if (typeof this.dataType !== 'string') {

        throw new Error('you should pass a String of params 1');

    } else if (testType['test' + this.dataType] === undefined) {

        throw new Error('not support this dataType yet');

    }

    //根据dataType声明检测类型函数
    this.test = testType['test' + this.dataType];

}

ArrayLkieC.prototype.init = function() {
    //检测dataType
    this.testDataType();
    //初始化数组
    this.array_lkie_c = new Array(this.length);
}


ArrayLkieC.prototype.setVal(idx, val) = function() {
    
}










module.export = ArrayLkieC;