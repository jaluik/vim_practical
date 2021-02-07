var buttons = viewport.buttons;
viewport.buttons.previous.show();
viewport.buttons.next.show();
viewport.buttons.index.hide();

/\v<buttons> 可以匹配buttons 单词

如果想统计改正则匹配到的个数

方法一： 
通过:%s///gn 可以获取某个匹配的总数   其中标志上的n位可以抑制替换操作  
此处查找域为空是为了直接使用之前的匹配规则

方法二：
:vimgrep //g %

%的作用在于 仅在当前文件中查找

此方法可以看到当前匹配项位于哪个位置
紧接着使用:cnext 可以跳转到下一个匹配的位置，:cprev 可以跳转到上一个匹配的位置 
