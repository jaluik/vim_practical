Markdown.dialects.Gruber = {
	lists: function() {
		 // TODO: Cache this regexp for certain depths.
		function regex_for_depth(depth) { /* implementation */ }
	 },
	 "`": function inlineCode( text ) {
		 var m = text.match( /(`+)(([\s\S]*?)\1)/ ); 
		if ( m && m[2] ) 
			return [ m[1].length + m[2].length ]; 
		else { 
			// TODO: No matching end code found - warn!
				return [ 1, "`" ];
		 }
	}
}

结合寄存器使用

qaq 用于清除a寄存器里面的内容
可以通过 :reg a 来查看寄存器内容是否清空

:g/TODO/yank A 会把所有包含TODO的内容存放到寄存器里面，注意这里使用的是 A, A 用于把寄存器里面的内容添加到寄存器a里面，如果直接使用a ，则会覆盖

