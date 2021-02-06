# ...[end of copyright notice]
class Animal
	# implementation
end

目标为： 在多个文件中改成这样

module Rank
	class Animal
		# implementation
	end
end	

:edit! 可以放弃本次缓冲区的修改
:wall 可以保存写入所有的缓冲区文件
:wnext 相当于执行:write 然后执行:next 命令
o 可以在当前行下面插入一行，并进入插入模式
