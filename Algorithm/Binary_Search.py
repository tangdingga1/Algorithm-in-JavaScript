import random

from timeCount import decorator
'''
1、数据从小到大有序排列是二分查找的前提
2、折中是二分查找的核心概念
'''
# 生成一个128的随机数组
my_list = list(range(128))
# 定义一个谁也不知道的变量
secret = int(random.random() * 128)
# 定义中间值
mid = int(len(my_list) / 2 - 1)
# 定义大值
lower = 0
# 定义小值
great = len(my_list) - 1
# 定义信号量
idx = 0


# 定义二分查找函数
def Binary_Search(compare, target):
    global mid, lower, great, idx
    idx += 1
    print(idx)
    if(compare > target):
        # 如果比目标值要大，那么改变大值为mid，然后重新取mid
        great = mid
        mid = int((mid - lower) / 2)
        # 然后继续比较
        Binary_Search(mid, secret)
    elif(compare < target):
        # 如果比目标值要小，那么改变小值为mid，然后重新取mid
        lower = mid
        mid = int((great - mid) / 2 + mid)
        # 然后继续比较
        Binary_Search(mid, secret)
    elif(compare == target):
        print(f'you got it the secret is {compare} and you use {idx}')
        return True


# 用于计算整个二分查找需要的时间
@decorator
def Binary_Search_Count():
    print(mid)
    Binary_Search(mid, secret)


norIdx = 0


# 普通方法
@decorator
def normal_Search():
    global norIdx
    for i in my_list:
        norIdx += 1
        if(i == secret):
            print(f'This is normal search, I got it the secret is {i} and you use {norIdx}')
            return


Binary_Search_Count()
normal_Search()
