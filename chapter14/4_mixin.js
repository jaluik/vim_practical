源：
mixin{
	applyName: function(config) {
		return Factory(config, this.getName());
	},
	applyNumber: function(config) {
		return Factory(config, this.getNumber());
	},
}
目标：

mixin{
	applyName: function(config) {
		return Factory(config, this.getName());
	},
	applyNumber: function(config) {
		return Factory(config, this.getNumber());
	},
}

注意：
如果:s/source/target/g 替换完以后发现需要全局替换，可以使用命令
g&对整个文件执行这条命令
他等价于:%s//~/& 表示是用一样的替换文本、一样的替换内容以及一样的修饰符来对全局执行命令

步骤：
Vjj 来选中apply的文本
yP  复制并粘贴V选中的文本
:%s/Name/Number/g 此时会把所有的Name都替换为Number
u 撤销上次的修改
gv 会激活选中模式，并把上次选中的内容高亮起来
:'<,'>&& 会对选中的内容再次执行 替换操作

& 命令是 :s命令的同义词，用于重复上一次的替换操作。
&& 会保留标志位



