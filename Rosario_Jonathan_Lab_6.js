//alert("JavaScript works!");

var listGirls = function() {

	var girlsArr = ["Alyssa", "Britney", "Lauren"];
	
	var lastArr = ["Costa", "Justice", "Costa"];
	
	console.log("I know " + girlsArr.length + " girls.");
	
	for (var i = 0; i < girlsArr.length; i++) {
		
			console.log(girlsArr[i], lastArr[i]);
		
	};
	
	var poppedgirl = girlsArr.shift() + " " + lastArr.shift();
	
	console.log(poppedgirl + " is my girlfriend.");
	
	return [girlsArr];
};

var test = listGirls();

console.log(test);
