function checkPassword(){

	let enteredPassword =
		document.getElementById("password").value;

	let hasUppercase = false;
	let hasLowercase = false;
	let hasSpecialCharacter = false;

	if(enteredPassword.length < 8){

		document.getElementById("result").innerHTML =
		"Password must be at least 8 characters long";

		document.getElementById("result").style.color =
		"red";

	}else{

		for(let i = 0; i < enteredPassword.length; i++){

			let currentCharacter = enteredPassword[i];
			let characterCode = currentCharacter.charCodeAt(0);

			if(characterCode >= 65 && characterCode <= 90){
				hasUppercase = true;
			}else if(characterCode >= 97 && characterCode <= 122){
				hasLowercase = true;
			}else{
				hasSpecialCharacter = true;
			}

		}

		if(hasUppercase === false){

			document.getElementById("result").innerHTML =
			"Password must contain at least one uppercase letter";

			document.getElementById("result").style.color =
			"red";

		}else if(hasLowercase === false){

			document.getElementById("result").innerHTML =
			"Password must contain at least one lowercase letter";

			document.getElementById("result").style.color =
			"red";

		}else if(hasSpecialCharacter === false){

			document.getElementById("result").innerHTML =
			"Password must contain at least one special character";

			document.getElementById("result").style.color =
			"red";

		}else{

			document.getElementById("result").innerHTML =
			"Login Successful";

			document.getElementById("result").style.color =
			"green";

		}

	}

}