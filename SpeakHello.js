(function (window){
//Step 2 : Wrap the entire content of SpeakHello.js inside of an IIFE
// See lecture 52, part 2
// Steep 3 : Create an object  called 'helloSpeacker'  to which you will attach 
// the "speak" method and which you will expose to the global context 
// see lecture 52 , part 1
var helloSpeaker = {};
//Dot not attach the SpeakHellowORD VARIABLE TO THE 'HelloSpeaker' obect.
var speakWord = "Hello";
//Step 4 : Rewrite the 'Speak' function such that it is attached to the 
//helloSpeaker object instead of being standalone function.
//See leacture 52, part 2
 helloSpeaker.speak = function (name) {
 	console.log(speakWord + " " + name);
 }
 //Step 5 : Expose the 'helloSpeaker' object to the global scope.Name it 
 //'helloSpeaker' on the global scope as well.
 // See lecture 52, part 2
 // Note  , step 6 : will be done in the SpeakGoodBye.js file.
 window.HelloSpeaker = helloSpeaker;
})(window);
