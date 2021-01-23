def fib(n):
	a, b = 0, 1
	while a < n:
		print a,
		a, b = b, a+b
fib(42)

:set shifwidth=4 softtabstop=4 expandtab 用来设置tabs的空格
V 进入按行选中的模式
j 下移然后选中下一行
>. 执行右缩进并重复一次。

