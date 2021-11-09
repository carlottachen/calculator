const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? (ex. 2 + 2)", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[1];
	num1 = Number(tokens[0]);
	num2 = Number(tokens[2]);

	if(mathSymbol === "+"){
		console.log(num1 + num2);
	}
	else if(mathSymbol === "-"){
		console.log(num1 - num2);
	}
	else if(mathSymbol === "/"){
		console.log(num1 / num2);
	}
	else if(mathSymbol === "*"){
		console.log(num1 * num2);
	}
	else if(mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1));
	}
	else{
		console.log("This is not a valid operation");
	}

	// This line closes the connection to the command line interface.
	reader.close()

});


