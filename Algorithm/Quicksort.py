'''
1、快速排序的算法高度为O(log n),每一层需要n次，所以快速排序的平均算法时间为O(n log n)
但在算法高度最差情况为n的时候，快速排序的算法复杂度为O(n2)
2、快速排序的核心思想是递归和基点。利用递归不断拆分复杂度到二项,利用基点进行排序
3、基点排序的核心思想是所有大于基点的为一组，小于基点为一组，然后不断递归进行排序
'''
from timeCount import decorator
from randomArr import randomArr
# 生成随机数组
targetArr = randomArr(100, 500)


def quickSort(arr):
    # 递归条件
    if(len(arr) < 2):
        return arr
    else:
        # 取得基点
        base = arr[0]
        # 左边小于基点数组规整
        lessThanBase = [i for i in arr if i < base]
        # 右边大于基点数组规整
        greatThanBase = [j for j in arr if j > base]
        less = quickSort(lessThanBase)
        great = quickSort(greatThanBase)
        return less + [base] + great


# 用于计算函数执行时间
@decorator
def count():
    print(quickSort(targetArr))


count()
