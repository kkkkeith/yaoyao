function checkNull (text) {
	var text = document.getElementById("text");
	var hint = document.getElementById("hint");
	if (text.value == "") {
		hint.innerHTML = "姓名不能为空";
		hint.style.color = "#de000f";
		text.style.border = "solid 1px #de000f";
	} 
	else {
		checkLen(text.value);
	}
}
function checkLen (text) {
	//\x00-\xff以内的是英文（单字节），以外的是双字节
	var nchar = /[^\x00-\xff]{1,}/g;
	var char = /\w{1,}/g;
	var str = char.exec(text);
	var nstr = nchar.exec(text); 
	if(str==null){
        str="";
    }
    if(nstr==null){
        nstr="";
    }
	var len = nstr.toString().length*2+str.toString().length;
	if (3<len && len<17) {
		hint.innerHTML = "名称格式正确";
		hint.style.color = "#56b73c";
		text.style.border = "solid 1px #56b73c";
	}
	else {
		hint.innerHTML = "长度为4~16个字符";
		hint.style.color = "#a9a9a9";
		text.style.border = "solid 1px #a9a9a9";
	}
}
function init () {
	document.getElementById("btn").onclick = function () {
		checkNull(text);
	};
	text.onfocus = function (){
		hint.innerHTML = "必填，长度为4~16个字符";
		hint.style.color = "#a9a9a9";
		text.style.border = "solid 1px #a9a9a9";
	}
}
init();