function prepareEventHandlers() {
	document.getElementById("frmContact").onsubmit = function() {
		if (document.getElementById("email").value == "") {
			document.getElementById("errorMessage").innerHTML = "email please!";
			return false;
		} else {
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

window.onload = function() {
	prepareEventHandlers();
};