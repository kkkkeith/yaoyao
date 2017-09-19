var userName = document.getElementById("name");
var psw = document.getElementById("psw");
var confirmation = document.getElementById("confirmation");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var submit = document.getElementById("submit");
var nameHint = document.getElementById("name-hint");
var pswHint = document.getElementById("psw-hint");
var conHint = document.getElementById("con-hint");
var emailHint = document.getElementById("email-hint");
var phoneHint = document.getElementById("phone-hint");
var inputName,inputPsw,inputConfirmation,inputEmail,inputPhone;
//验证名称
function checkNull (text) {
	//var name = document.getElementById("name");
	if (text == "") {
		nameHint.innerHTML = "名称不能为空";
		nameHint.style.color = "#de000f";
		userName.style.border = "solid 1px #de000f";
		inputName = false;
	}
	else {
		checkLen(text);
	}
}
function checkLen (text) {
	//\x00-\xff以内的是英文（单字节），以外的是双字节
	//匹配不在\x00-\xff范围内的字符
	var nchar = /[^\x00-\xff]{1,}/g;
	var char = /[\w+\S]{1,}/g;
	//转换成数组
	var str = char.exec(text);
	var nstr = nchar.exec(text); 
	if(str==null){
        str="";
    }
    if(nstr==null){
        nstr="";
    }
    //转换成字符串
	var len = nstr.toString().length*2+str.toString().length;
	if (3<len && len<17) {
		nameHint.innerHTML = "名称格式正确";
		nameHint.style.color = "#56b73c";
		userName.style.border = "solid 1px #56b73c";
		inputName = true;
	}
	else {
		nameHint.innerHTML = "长度应为4~16个字符";
		nameHint.style.color = "#de000f";
		userName.style.border = "solid 1px #de000f";
		inputName = false;
	}
}
//验证密码
function checkPsw (text) {
	if (text == "") {
		pswHint.innerHTML = "密码不能为空";
		pswHint.style.color = "#de000f";
		psw.style.border = "solid 1px #de000f";
		inputPsw = false;
	}
	else {
		checkPswLen(psw.value);
	}
}
function checkPswLen (text) {
	//\x00-\xff以内的是英文（单字节），以外的是双字节
	//匹配不在\x00-\xff范围内的字符
	var nchar = /[^\x00-\xff]{1,}/g;
	var char = /[\w+\S]{1,}/g;
	//转换成数组
	var str = char.exec(text);
	var nstr = nchar.exec(text); 
	if(str==null){
        str="";
    }
    if(nstr==null){
        nstr="";
    }
    //转换成字符串
	var len = nstr.toString().length*2+str.toString().length;
	if (7<len && len<17) {
		pswHint.innerHTML = "密码可用";
		pswHint.style.color = "#56b73c";
		psw.style.border = "solid 1px #56b73c";
		inputPsw = true;
	}
	else {
		pswHint.innerHTML = "长度应为8~16个字符";
		pswHint.style.color = "#de000f";
		psw.style.border = "solid 1px #de000f";
		inputPsw = false;
	}
}
//验证确认密码
function checkConfirmation (text) {
	if (text == "") {
		conHint.innerHTML = "密码不能为空";
		conHint.style.color = "#de000f";
		confirmation.style.border = "solid 1px #de000f";
		inputConfirmation = false;
	}
	if (text == psw.value) {
		conHint.innerHTML = "密码输入一致";
		conHint.style.color = "#56b73c";
		confirmation.style.border = "solid 1px #56b73c";
		inputConfirmation = true;
	}
	else {
		conHint.innerHTML = "两次密码不一致";
		conHint.style.color = "#de000f";
		confirmation.style.border = "solid 1px #de000f";
		inputConfirmation = false;
	}
}
//验证邮箱
function checkEmail (text) {
    var at = text.indexOf("@");
    var dot = text.indexOf(".");
    if (at < 1 || dot - at < 2) {
    	emailHint.innerHTML = "邮箱格式错误";
		emailHint.style.color = "#de000f";
		email.style.border = "solid 1px #de000f";
		inputEmail = false;
    }
    else {
    	emailHint.innerHTML = "邮箱格式正确";
		emailHint.style.color = "#56b73c";
		email.style.border = "solid 1px #56b73c";
		inputEmail = true;
    }
}
//验证手机
function checkPhone (text) {
    if (!/1[34578]\d{9}/.test(text)) {
    	phoneHint.innerHTML = "手机格式错误";
		phoneHint.style.color = "#de000f";
		phone.style.border = "solid 1px #de000f";
		inputPhone = false;
    }
    else {
    	phoneHint.innerHTML = "手机格式正确";
		phoneHint.style.color = "#56b73c";
		phone.style.border = "solid 1px #56b73c";
		inputPhone = true;
    }
}
//初始化及绑定得到焦点事件、失去焦点事件、点击事件
function init () {
	userName.onfocus = function () {
	    nameHint.innerHTML = "必填，长度为4~16个字符";
	    nameHint.style.color = "#a9a9a9";
	    userName.style.border = "solid 1px #a9a9a9";
    };
    userName.onblur = function () {
	    checkNull(userName.value);
    };
    psw.onfocus = function () {
	    pswHint.innerHTML = "必填，长度为8~16个字符";
	    pswHint.style.color = "#a9a9a9";
	    psw.style.border = "solid 1px #a9a9a9";
    };
    psw.onblur = function () {
	    checkPsw(psw.value);
    };
    confirmation.onfocus = function () {
	    conHint.innerHTML = "再次输入相同密码";
	    conHint.style.color = "#a9a9a9";
	    confirmation.style.border = "solid 1px #a9a9a9";
    };
    confirmation.onblur = function () {
    	checkConfirmation(confirmation.value);
    };
    email.onfocus = function () {
    	emailHint.innerHTML = "输入邮箱";
	    emailHint.style.color = "#a9a9a9";
	    email.style.border = "solid 1px #a9a9a9";
    };
    email.onblur = function () {
    	checkEmail(email.value);
    };
    phone.onfocus = function () {
    	phoneHint.innerHTML = "输入手机";
	    phoneHint.style.color = "#a9a9a9";
	    phone.style.border = "solid 1px #a9a9a9";
    };
    phone.onblur = function () {
    	checkPhone(phone.value);
    };
    submit.onclick = function () {
     	if (inputName&&inputPsw&&inputConfirmation&&inputEmail&&inputPhone) {
    		alert("提交成功！");
    	}
    	else {
    		if (!inputName) {
    			alert("名称格式错误");
    		}
    		if (!inputPsw) {
    			alert("密码格式错误")
    		}
    		if (!inputConfirmation) {
    			alert("密码输入不一致")
    		}
    		if (!inputEmail) {
    			alert("email格式错误")
    		}
    		else if (!inputPhone) {
    			alert("手机格式错误")
    		}
    		alert("提交失败！");
    	}
    };

}
init();
