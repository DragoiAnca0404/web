var objPeople = [
	{ // Object @ 0 index
		username: "Matei",
		password: "Cosmin"
	},
	{ // Object @ 1 index
		username: "Ionescu",
		password: "Iza"
	},
	{ //Object @ 2 index
		username: "Ion",
		password: "Adi"
	}
]


function getInfo() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	for (var i = 0; i < objPeople.length; i++) {
		if (username == objPeople[i].username && password == objPeople[i].password) {
			document.getElementById("message").innerHTML = "te-ai logat :)";
			//console.log(username + " te-ai logat")
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);

			return;
		}
	}
	//console.log("Incorect username si parola")
	document.getElementById("message").innerHTML = "incorect username si parola :(";
}


$(document).ready(function () {
	$('#show_password').on('click', function () {
		var passwordField = $('#password');
		var passwordFieldType = passwordField.attr('type');
		if (passwordField.val() != '') {
			if (passwordFieldType == 'password') {
				passwordField.attr('type', 'text');
				$(this).text('Hide Password');
			}
			else {
				passwordField.attr('type', 'password');
				$(this).text('Show Password');
			}
		}
		else {
			alert("Introdu parola");
		}
	});
});