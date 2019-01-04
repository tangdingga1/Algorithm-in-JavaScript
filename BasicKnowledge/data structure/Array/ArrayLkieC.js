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
    this.operaLength = this.initValArr.length;
    this.init();
}

//根据传入的dataType，确定test方法对应检测函数的方法
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

//输出类型错误
ArrayLkieC.prototype.consoleTypeWrong = function () {
    throw new Error(`TypeError: you set type ${this.dataType}, but set a wrong type`);
}

//操作完成
ArrayLkieC.prototype.operateFinshConsole = function(name) {
    console.log('\033[42;30m DONE \033[40;32m ' + name + ' sucess you got \033[41;37m', this.array_lkie_c, '\033[40;37m');
}

//检测数组边界
ArrayLkieC.prototype.crossLineTest = function() {
    if (this.operaLength + 1 > this.length) {
        throw new Error(`you cross the line of Array`);
    }
}

//初始化
ArrayLkieC.prototype.init = function() {
    //初始化检测类型方法
    this.testDataType();
    //初始化数组
    this.array_lkie_c = new Array(this.length);
    //检测初始值类型是否符合设置类型的规范
    if (this.initValArr.every(item => this.test(item))) {
        this.array_lkie_c.splice(0, this.initValArr.length, ...this.initValArr);
        this.initValArr = [];
        this.operateFinshConsole('init');
    } else {
        this.consoleTypeWrong();
    }
    
}


//往数组当中添加值,idx为数组下标，从0开始
ArrayLkieC.prototype.addVal = function (idx, val) {
    if(this.test(val)) {
        //判断数组是否越界
        this.crossLineTest();

        // 添加进数组,如果数组当前为空，直接设置值，否则把每一项往后移动1
        if (!this.array_lkie_c[idx]) {
            this.array_lkie_c[idx] = val;
        } else {
            this.array_lkie_c = this.array_lkie_c.slice(0, idx).concat([val], this.array_lkie_c.slice(idx));
            this.array_lkie_c.splice(this.array_lkie_c.findIndex(item => !item), 1);
        }

        //增加数组的length
        this.operaLength++;
        this.operateFinshConsole('addVal');

    } else {
        this.consoleTypeWrong();
    }
}

//删除数组某一项
ArrayLkieC.prototype.deleteVal = function(idx) {
    delete this.array_lkie_c[idx];
    //减少操作的长度
    this.operaLength--;
    this.operateFinshConsole('delete');
}


//更改的数组某一项
ArrayLkieC.prototype.changeVal = function(idx, val) {
    if (this.test(val)) {
        this.array_lkie_c[idx] = val;
    } else {
        this.consoleTypeWrong();
    }
}


module.exports = ArrayLkieC;