console.log([{'a':1},{'b':2}])

cities = %w{London Berlin New \ York}

% 可以在括号直接跳转
针对cities这段话，如果想改造成 ["London", "Berlin", "New York"]
在执行%命令时，vim会自动为发生跳转的位置设置一个标记，而后可以通过``跳回去
dt{

% 跳转到}
r] 修改字符为]
`` 跳回到之前%标记的位置
r[
