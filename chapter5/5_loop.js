var tally;
for (tally=1; tally <= 10; tally ++){
	//do something with tally
}

* 可以跳到跟当前光标所在字符最近的下一个同样的单词

随后执行 cwcounter 会把tally(当前光标选中的单词)替换为counter

然后执行 :%s//<C-r><C-w>/g会跳出来最近一次替换的单词 并进行全局替换
<C-r><C-w>用于插入光标下的单词

可以进行 :set 然后按up 或down键 就会查找历史命令



