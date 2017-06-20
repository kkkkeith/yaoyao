function init () {
	var students = document.getElementById("students");
    var others = document.getElementById("others");
    var work = document.getElementById("work");
    var area = document.getElementById("area");
    var location = document.getElementById("location");
    var beijing = document.getElementById("beijing");
    var henan = document.getElementById("henan");
    var bd = document.getElementById("bd");
    var city = document.getElementById("city");
    var college = document.getElementById("college");
    var qh = document.getElementById("qh");
    var hd = document.getElementById("hd");
    var zd = document.getElementById("zd");
	students.onchange = function () {
		work.style.visibility = "hidden";
		area.style.visibility = "visible";
	};
	others.onchange = function () {
		area.style.visibility = "hidden";
		work.style.visibility = "visible";
	};
	location.onchange = function () {
	    if (location.value == "beijing") {
	        hd.style.display = "none";
	        zd.style.display = "none";
	        bd.style.display = "block";
	        qh.style.display = "block";
	        bd.selected = true;
	    }
	    else {
	    	hd.style.display = "block";
	        zd.style.display = "block";
            bd.style.display = "none";
	        qh.style.display = "none";
	        hd.selected = true;
	    }
	};
}
init();