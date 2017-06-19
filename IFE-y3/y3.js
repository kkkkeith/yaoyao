function init () {
	var students = document.getElementById("students");
    var others = document.getElementById("others");
    var work = document.getElementById("work");
    var area = document.getElementById("area");
    var beijing = document.getElementById("beijing");
    var henan = document.getElementById("henan");
    var bd = document.getElementById("bd");
    var qh = document.getElementById("qh");
    var hd = document.getElementById("hd");
    var zd = document.getElementById("zd");
	students.onclick = function () {
		work.style.visibility = "hidden";
		area.style.visibility = "visible";
	};
	others.onclick = function () {
		area.style.visibility = "hidden";
		work.style.visibility = "visible";
	};
	beijing.onclick = function () {
	    hd.style.display = "none";
	    zd.style.display = "none";
		bd.style.display = "block";
		qh.style.display = "block";
		qh.selected = true;
    };
    henan.onclick = function () {
	    hd.style.display = "block";
	    zd.style.display = "block";
		bd.style.display = "none";
		qh.style.display = "none";
		hd.selected = true;
	};
}
init();