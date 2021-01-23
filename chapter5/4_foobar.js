var foo = 1 
var bar = 'a'
var baz = 'z'
var foobar = foo + bar
var foobarbaz = foo + bar + baz


:%normal A; 表示每一行都执行A; 的操作
在执行normal操作之前，vim会把光标移动到起始的地方

:%normal i// 则会注释每一行
@: 重复执行上次的Ex命令操作

<C-o> 可以取消上次的@:
<C-d> 显示可以用的补全参数 还可以显示可用选项
