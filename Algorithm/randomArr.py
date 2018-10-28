'''
这个模块用来生成随机数组
'''
import random


def randomArr(length, max):
    randomList = [int(random.random() * max) for i in range(0, length)]
    print(randomList)
    return randomList
