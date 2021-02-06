var foo = "method("+argument1+","+argument2+")";

目标是

var foo = "method(" + argument1 + "," + argument2 + ")";

类似的

x = "("+a+","+b+","+c+","+d+","+e+")";

目标是

x = "(" + a + "," + b + "," + c + "," + d + "," + e + ")";

首先
f+ 定位到+的位置
s + [Esc] 来保存一次修改操作
qq;.q 来把重复下一次操作存入q的寄存器里面

22@q 来重复实现之前q寄存器里面保存的内容

