var tpl = [
	'<a href="{url}">{title}</a>'
]


进入visual模式后
vim中的文本对象由两个部分组成 i或者是 a
一般以i开头的文本对象会选择分隔符内部的文本，可以理解为inside
以a就开头的文本会包含包括分隔符在内的文本，可以理解为arround

当前光标在url中的r上时
如果想高亮{}中的文本
使用vi} 首先进入visual模式  i}会选中{}中的内容
使用a"可以高亮{url}
使用i> 可以高亮<>里面的内容
使用it 会高亮到{title}里面的内容
使用at会gaoliang<> 的内容
使用a] 会高亮[] 里面的内容

a) 或者ab 表示一堆圆括号
a} 表示 一对}号
at 表示一对xm标签 如<xml>tags</xml>

不仅可以在visual模式下进行文本对象操作
还可以在普通模式下进行文本操作
如d{motion}中的motion

比如da" 就会删除""及其中的内容
cit 可以删除标签里面的内容并进入编辑模式
yit 可以靠本标签里面的内容
dit 可以删除标签里面的内容



