 $(document).ready(function() {
     //create a "Random Word" source and a button to activate it.
     var WordArray = ["calculator", "phone", "aspirin", "pencil", "flashlight", "headphones", "printer", "video", "photograph", "lampshade", "pear", "magnolia"];
     var answerArray = [];

     var randomWord;
     var randomWordChars;
     var chosenLetters;




     // this function is for the letters chosen by the player
     $(".letterBtn").on("click", function() {
         var chosenLetter = $(this).html();

         //change chosen letter to lowercase - GOOGLE THAT SHIT (create a var for lowercase letter)
         //use Jquery to select the ul in the guessPanel and get its children (its li items) GOOGLE THAT SHIT, too ==> you'll get the li as an array
         // for loop the array items (li's) and for eac=h one check if its attr equals the lowercase letter
         //If they're the same , change the li item's html to its attr (which is the letter that was clicked) ==> changes from underscore to the value (a or b or c, etc.)
         console.log(chosenLetter);

         /*--------------------------------
            This loop loops through the randomWordChars array
            and checks to see if the letter you pressed matched any 
            of the letters in randomWordChars.
         ---------------------------------*/
         var hasMatch = false;
         for (var i = 0; i < randomWordChars.length; i++) {
             if (randomWordChars[i] === chosenLetter) {

                 hasMatch = true;

                 console.log("The letters match at index", i);


                 answerArray[i] = chosenLetter;
                 $("#guessPanel").html(answerArray);


                 /* if the letters match, you need to put the 
                 chosenLetter into the right position in the
                 answer array */

                 /*then just render everything to the page*/

             }
         }
         if (!hasMatch) {
             $(".wrongGuessPanel").append(chosenLetter);
             console.log("The letters do not match at index.")
         }
     })

     //Create  a function to choose a random word and split it into individual letters


     $("#randomWordButton").on("click", function() {
         var randomWord = WordArray[Math.floor(Math.random() * WordArray.length)];
         randomWordChars = randomWord.split("");
         console.log(randomWord);
         console.log(randomWordChars);


         for (var i = 0; i < randomWord.length; i++) {
             answerArray[i] = "_";


             console.log(answerArray);
             $("#guessPanel").html(answerArray);
             //      document.getElementById("#guessPanel").innerHTML = answerArray;
         }
         //         var remainingLetters = word.length;

     })






     // randomWordCharsBlanks = 
     //create as many li as we have characters in each randomWordChar array




     // value = a
     /*
     <ul>
     //list horiz in panel on the page

          <li "value" = "a">_</li>
          <li "value" = "s">_</li>
          <li "value" = "p">_</li>
          <li "value" = "i">_</li>
          <li "value" = "r">_</li>
          <li "value" = "i">_</li>
          <li "value" = "n">_</li>

        </ul>

     */




     //Capture in an array and send the newly created random word characters
     //to a display area, but only represented by a corresponding number of blank lines.
     //   for (var i = 0; i < randomWordChars.length; i++) {
     //  randomWordChars[i] = "_ ";
     // use Jquery to dynamicallly create the li on 27 - 33
     //create the ul for the li's to exist in

     // APPEND the ul to the guessPanel
     //   }

     //    function printRandomWordCharsBlanks() {
     //        for (var i = 0; i < randomWordChars.length; i++) {
     //            var guessPanel = document.getElementById("guessPanel");
     //            var letter = document.createTextNode(randomWordChars[i]);
     //            guessPanel.appendChild(letter);
     //       }
     //   }



     //Create a bank of buttons representing letters of the alphabet as a way to guess letters of the word


     // create a click event to match eatch button to its corresponding letter of the alphabet / console.log it for testing

     //     $(".letter-button").on("click", function() {
     //          var chosenLetters = $[];
     //     console.log(chosenLetters);
     //     



     // 7. Create an "on-click" event attached to the ".letter-button" class.
     //$(".letter-button").on("click", function() {

     //chosenLetters = $("")






     //CREATING AN ARRAY FROM CLICKED LETTERs



     //after a letter is clicked, it changes color and is locked/disabled for the remainder of the game


     //commpare that letter to the mystery word and its letters/associated blank tiles


     //if chosen letter matches, that letter shows up in the word, replacing the blank tile

     //if chosen letter does not match, no letter appears and a piece of the hangman graphic appears

     //if, after a given number of incorrect choices (based on how much of the hangman graphic you start with),
     //the puzzle is not solved, the player loses. SEND ALERT TO LET THEM KNOW THAT

     //if the player correctly guess the word before they hang the man, they win. SEND ALERT

     //create a button to reset game (could the alert message be tied to this?)

 })
