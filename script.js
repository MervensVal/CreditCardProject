

function testLength(value, length){
	
	if (value.length===length){
		return true;
	}
	else{
		return false;
	}
}
//////////////////////////////////////////
function testNumber(value){
	
	if (!isNaN(value)){ //note value parameter must be a string
		return true;
	}
	else{
		return false;
	}
}
///////////////////////////////////////////////


function validateControl(control, name, length){ //note controle parameter must be a string
//	let name = control.name;
	
	let isCorrectLength = testLength(control, length);
	
	if(isCorrectLength===false){
		//Display an appropriate error message
		alert(name+" must be exactly "+ length+ " digits");
		return false;
	}
	
	else {
		let isANumber = testNumber(control);
		if(isANumber===false){
			//Display an appropriate error message
			alert(name+" must be a number");
			return false;
		}
		else{
			return true;
		}
	}

}

//////////////////////////////////////////////
function validateCreditCard(value){
	
	//	Remove any spaces from the value
	value = value.split(" ").join("");
	
	//Test whether the credit card value represents a number
	//var isANumber validateControl(value, "credit card", value.length);
	var isANumber = testNumber(value);
	if (isANumber===false){
		//Display an appropriate error message
		alert("credit card must only contain numbers");
		return false;
	}
	else{
		var valueFirstDigit = value.charAt(0); 
		if(valueFirstDigit !=3 && valueFirstDigit !=6 && valueFirstDigit!=5 && valueFirstDigit != 4){
			alert("Number entered is not a valid card number. The 4 acceptable card types are listed below");
			return false;
		}
    
		else{
			if(valueFirstDigit == 3){
				let isACorrectLength = testLength(value,15) ;
				if(isACorrectLength===false){
					alert("Card is not the correct length. Should be 15 digits if it begins with a 3");
          return false;
        }
        else{
						return true;
					}
        }
        else{	
				let isACorrectLength = testLength(value,16) ;		
					if(isACorrectLength===false){
						alert("Card is not the correct length. Should be 16 digits if it begins with a 4");
						return false;
					}
          else{
						return true;
					}
        }
		}
	}
}

//////////////////////////////////////////////////////


function validateDate(value){
	
	//Test if the value is greater than today's date
	var today = new Date();
	var value = new Date(value);
	
	if(value.getTime() > today.getTime()){
		return true;
	}
	else{
		alert("Card is expired");
    return false;
	}
}

//////////////////////////////////////////////////////

function validateEmail(value){
	
	//username@domain.com
	var re =/^([a-z\d]+)@([a-z\d]+)\.([a-z\d]+)$/; 
	var result = re.test(value);
	if(result===false){
		alert("Email entered incorrectly. Example Format is username@domain.com");
    return false;
	}
	else{
		return true;
	}
}



//////////////////////////////////////////////////


function validateState(value){
	if (value === "default"){
		alert("A state has not been selected");
		return false;
	}
	else{
		return true;
		alert("good")
	}
}


/////////////////////////////////////////////////


function validateForm(){
	var cardNumber = document.getElementById("cardnum").value;
	var CVV2_CVC = document.getElementById("cvc").value;
	var emailAddress = document.getElementById("email").value;
	var expirationDate = document.getElementById("expirationdate").value;
	var states = document.getElementById("states").value;
	//var statePicked = states.options[states.selectedIndex].text;
	var zip = document.getElementById("zipCode").value;
	
	
	
	
	//validateControl for zip code
	var zipCodeIsValid = validateControl(zip, "Zip Code", 5);
	 
	//validateEmail x
	var emailIsValid = validateEmail(emailAddress);
	
	//validateCreditCard
	var cardNumIsValid = validateCreditCard(cardNumber);
	 
	//validateControl for cvc
	var cvcIsValid = validateControl(CVV2_CVC, "CVV2/CVC", 3);
	
	//validateDate 
	var dateIsValid = validateDate(expirationDate);
	
	//validateState x
	var stateIsGood = validateState(states);
	
	if (zipCodeIsValid ===true && cardNumIsValid===true 
		&& cvcIsValid===true && dateIsValid===true && emailIsValid ===true
		&& stateIsGood===true){
		alert("Payment Submitted Successfully!");
	}
	else {
		alert("Form cannot be submitted due to errors mentioned");	
	}
		return false; //returned false as instructed
	
}

//M_VAL
















