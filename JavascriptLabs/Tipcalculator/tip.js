function calcTip() {
	var subtotalElem = document.getElementById("subtotal");
	var tipElem = document.getElementById("tip");
	var totalElem = document.getElementById('total');
	//var subtotal = 
	//var tip = 
	var total = subtotalElem*tipElem/100;
	totalElem.innerHTML = '$' + total;
}
