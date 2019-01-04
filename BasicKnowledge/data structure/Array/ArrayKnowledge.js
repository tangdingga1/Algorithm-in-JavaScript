const ArrayLkieC = require('./ArrayLkieC.js');



/**
 * #数组
 * 数组是一种**线性**数据结构，它具有一组**连续的内存空间**，储存一组具有**相同类型**的数据。
 * Java,Js,Python中的数组，实际上是一个保存内存地址的**容器**， 并不是严格意义上的数组
 * 
 *  声明一个具有三个项的数组，a[3]，从左往右依次为数组的下标， 数组的项， 内存地址
 *  0  a[0]  1000-1003
 *  1  a[1]  1004-1007
 *  2  a[2]  1008-1011
 * 
 * 所以用数组下标随机访问数组的任意一项，时间复杂度永远为O(1)。因为：
 * 数组访问任意一项，遵循 a[n](内存地址) = 数组第一项的地址 + n * 数组每一项大小
 * 1.数组每一项为同一类型，所以数组每一项大小相同
 * 2.数组为连续的线性结构，内存地址连续累加，所以可以使用第一项内存地址加上 n * 数组每一项大小去访问
 * 
 * **注意**
 * 数组的查找实际上和下标访问时两个概念，数组的查找和把随机数排序完查找出来的结构相同，使用二分查找，时间复杂度也为 O(logn)
 * 
  */

/**
 * #数组低效增加和删除
 * 数组为了保持内存数据的联系性，会导致操作很低效
 * 
 * 现在假设一个数组a[n]，长度为n
 * 插入一个val到k项，那么我需要把k项开始到后面所有的数都朝后挪动一位，
 * 假设k为数组的尾部，那么只需要插入，此时时间复杂度为O(1)，如果是数组的第一项，此时需要挪动整个数组，复杂度为O(n)
 * 
 * 删除数组时间复杂度也是如上
 */

/**
 * #数组增加和删除提效算法
 * 
 * 增加数组
 * 假如有数组a[10]
 * [a b c d e]
 * 我们需要在第三项，也就是c的位置，插入一个x，此时不用每一项后移，只需要c改为1，然后把c放到数组的最后一项，这样就能让增加操作时间复杂度变为O(1)
 * [a b x d e c]
 * 此方法需要**警惕数组越界**，如果超出数组规定的长度，即超出数组范围内存，可以访问任意内存，容易造成攻击
 * 
 * 删除数组
 * 假如有数组b[10]
 * [a b c d e f g]
 * 此时我们需要删除数组的前三项a b c，我们先不进行删除，而是保存数组删除的项b[0], b[1], b[2]，记录下来，当后续操作超出数组边界的时候，再进行删除
 * 这种算法是JVM实现清除回收算法的核心
 */


/**
 * #数组为什么要用0做为下标
 * 回顾一下数组访问任意下标的公式
 * a[n](内存地址) = 数组第一项的地址 + n * 数组每一项大小
 * 当n为1的时候，实际上的内存地址就是数组第一项，此时n就要取0，如果n为1，公式就要写成
 * 
 * a[n](内存地址) = 数组第一项的地址 + (n - 1) * 数组每一项大小
 * 因此每次访问的时候都要多做一次减法操作，所以数组第一项定为0
 */



/**
 * 这里我根据数组的两个重要定义，设置了一个JS的数组类，使用类的方法，来对模拟的数组进行增删改查
 * 支持类型 基本类型 Boolean, Number, String 引用类型 Object, Function, Array
 * 
 */

//初始化，参数依次为，1数组的类型，2数组的长度，后面为数组从第0项开始的值，如果类型不对，将会报错
const arrayLkieC_Str = new ArrayLkieC('String', 10, '1', '2');
const arrayLkieC_Obj = new ArrayLkieC('Object', 5, {}, {});


//使用addVal往里面增加值，第一项为数组下标，第二项为对应需要设置的值，并设置数组边界
arrayLkieC_Str.addVal(2, '3');
arrayLkieC_Str.addVal(3, '4');

//使用deleteVal往数组当中删除值
arrayLkieC_Str.deleteVal(0);
arrayLkieC_Str.deleteVal(1);


//使用changeVal更改数组的值
arrayLkieC_Str.changeVal(1, '3');