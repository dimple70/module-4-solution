(function (window){
	//start here if you want a more challenging start point for the assignment
	// Module 4 assignment instruction .
	//The idea of this assignment is to take an existing array of name 
	// and then output either Hello 'Name' or Good Bye 'Name' tothe console
	// the program should say "Hello" to any name except  names that start with a"j"
	// or "j" , otherwise , the program should say "Good Bye".SO THE FINAL OUTPUT
	// on the console should look like this :
	/*
	Hello Yaakov
	Good Bye John
	Good Bye Jen
	Good Bye Jason
	Hello Paui
	Hello Frank
	Hello Larry
	Hello Paula
	HelloLaura
	Good Bye Jim
	WARNING !!! WARNING!!!
	The code does not currently work! It is your job to make it work
	as described in the requirement and steps in ordr to complete this 
	assignment .
	WARNING!!1 WARNING!!!
	*/
	//STEP 1:
	//Wrap the entire content of script.js inside of an IIFE
	//See lecture 52, part 2
	//Note, step 2 will be done in the SpeakHello.js file.
	var names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
	// STEP 10 :
	// Look ove the names array and say either 'Hello' or "GoodBye"
	//using the 'speak' method or either hellospeaker  or byespeaker
	//'speak' method .
	// see lecture 50, part 1
	for (var i in names) {
		// step 11:
		// Retrieve the first letter of the current name in the loop.
		//Use the string object's 'charAt' function .Since we are looking for 
		// names that start with either upper case or lower case 'J'/'j, call
		//to lower case character 'j' afterwards.
		//Look up these method on Mozilla Developer Network web site if needed.
		var firstletter = ((names[i].charAt(0)).toLowerCase();
		// step 12 :
		// compare the 'firstLetter' retrieved in step 11 to lower case 
		//'j'.If the same , call byeSpeaker's 'speak' method with current name
		//in the loop . Otherwise , call helloSpeaker's 'speak' method with the current 
		//name in the loop .
		if (firstLetter =='j') {
			window.byespeaker.speak(names[i]);

		} else {
			window.helloSpeaker.speak(names[i]);
		}

	}
})(window);