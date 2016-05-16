function calculate () {
	var digits = document.getElementById("digits").value;
	if (0>digits || digits>20 || isNaN(digits)) {
		 document.getElementById("result").innerHTML = "Error! Please enter a number between 0 and 20 and try again.";
		 return false;
	}
	else {
		var result = Math.PI.toFixed(digits);

		document.getElementById("result").innerHTML = result;
		return false;
	}
}