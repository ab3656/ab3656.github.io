function calcTip() {
	var subtotalElem = document.getElementById("subtotal");
	var tipElem = document.getElementById("tip");
	var totalElem = document.getElementById('total');
	var subtotal = parseFloat(subtotalElem);
	var tip = parseFloat(tipElem);
	var total = subtotal*tip/100;
	totalElem.innerHTML = '$' + total;
}
