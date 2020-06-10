(function  (window) {
	//Note! the step in this file arebasically ideantical to the ones you
// performed in the speakhello.js file.
// Step 6 : wrap the entire content of speakgoodbye.js inside of an IIFE
// See lecture 52, part 2
// Step 7 : create an object called 'byespeaker' to which you will attach
  // The "speak" method and which you will expose to the global context
  // See lecture 52 part 1 
  var byespeaker = {} ;
  // Do not attach the speakWord variable to the 'byeSpeaker' object.
   var speakWord = "Good Bye";
   // Step 8 : Rewrite the 'speak' function such that it is attach to the
   //byeSpeaker object instead of being a standalone function .
   // See lecture 52,part 2
   byeSpeaker.speak = function (name) {
   	console.log(speakWord + " " + name);

   }
   // Step 9 : Expose the 'byeSpeaker' object to the global scope.
   //'byeSpeaker' on the global scope as well.
   window.byeSpeaker = byeSpeaker;
})(window);