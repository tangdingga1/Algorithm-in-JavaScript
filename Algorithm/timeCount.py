import time

'''
这个模块专门用来统计函数运行的时间
'''


def decorator(fun):
    def runTime(*arg):
        start = time.time()
        fun(*arg)
        end = time.time()
        print(f'----------Running time is {end - start} seconds-----------')
    return runTime
