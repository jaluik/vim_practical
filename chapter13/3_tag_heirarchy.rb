class XhtmlDocument < XmlDocument; end
class XhtmlTag < XmlTag; end

目标:
class XHTMLDocument < XMLDocument; end
class XHTMLTag < XMLTag; end


构建正则表达式: /\vX(ht)?ml\C   其中\C用于表示强制区分大小写

gUgn 会把匹配到的内容进行大写操作

然后重复执行n. 操作就可以把接下来匹配到的内容进行大写

比如这里gn 会把正则匹配的内容进行大写，本质上就是 gU{motion} 操作

dgn 可以删除匹配的内容

