'use strict';

// ******* EXERCISE 1 *******

//Add a callback function to ready that alerts a message saying, ready for DOM manipulation. Try using both styles of callbacks.

//Method #1
$( document ).ready(function() {
    //console.log( "ready for DOM manipulation!" );
    //alert('ready for DOM manipulation!')
});

//Method #2
$(function() {
    //console.log( "this is the shorthand version" );
    //alert('ready for DOM manipulation!')
});

//Method #3
function readyFn() {
    // Code to run when the document is ready.
    //console.log("named function version");
    //alert('ready for DOM manipulation!')
}
$( document ).ready( readyFn );


// ******* EXERCISE 2 *******
// Find the secretBox on the page (there is more than one way to select this element. Challenge yourself to use a couple different methods!). Set the background color to white. Add an h1 tag that says, "secret box!"

$( document ).ready(function() {
    // var secretBox = $("#secretBox");
    // secretBox.css('background-color', 'white').html("<h1>secret box!</h1>");
});

// Change all red boxes to white.

// $( document ).ready(function() {
//     $('.boxType1').css('background-color', 'white');
// });

// Find all child divs of the first row. Print to the console the number of items returned from this query, and set the class for each div to boxType3. Then, check to make sure that the class was successfully added.

// $( document ).ready(function() {
//
//     //shorthand
//     //$("#row1").children().addClass('boxType3');
//
//     //longhand
//     var firstRow = $("#row1");
//     var kiddos = firstRow.children();
//     console.log(kiddos.length);
//     kiddos.addClass('boxType3');
//
//     for (var i = 0; i < kiddos.length; i++){
//       console.log(kiddos[i].className);
//     }
//
// });

// Make the last box in the last row disappear. (Hint, look into the display style). Log to the console what is returned from your query selector. Can you explain what is returned?

// $( document ).ready(function() {
//     var lastBox = $("#row4").children().last();
//     lastBox.css('display', 'none');
//     console.log(lastBox);
// });

// Create a variable to store the first two divs in the second row. Then, remove all styling from the divs.

// $( document ).ready(function() {
//         var divs = $('#row2 div');
//         console.log(divs);
//         var firstTwo = divs.slice(0,2);
//         console.log(firstTwo);
//         firstTwo.removeClass();
// //     $('#row2 div').slice(0,2).removeClass();
//
// });


// Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels. Then, log to the console a boolean that confirms that the width was correctly applied.

// $( document ).ready(function() {
//   $('.box').not('#secretBox').width('2px');
//    console.log($('.box').not('#secretBox').css("width") === '2px');
// });




// ****** EXTRA TASKS ********


//***Find all divs that have a parent div with a class of "row". Console.log() the boolean "true" if the div has a class of "boxType1", and "false" if the div has a class of "boxType2" or "boxType2".
  $( document ).ready(function() {
    //console.log($( "#container" ).children().size());
  });


  //$( "li" ).has( "ul" ).css( "background-color", "red" );

//Using the toggle() method, make the document body disappear. Add one line of code to make it reappear. Can you explain how this works? Then, make the body toggle out quickly and then back into view slowly by adding arguments to the toggle methods.
// $( document ).ready(function() {
//   $( "body" ).toggle('fast');
//   $( "body" ).toggle('slow');
// });

//***On page load, make divs with a class of boxType1 invisible (different than display: none).Make divs with a class of boxType2 fade out one second after the document is read. Make the boxType1 divs fade into view immediately following the boxType2 fadeout (use 'complete' function).



//Apply some kind of animation to the secretBox. The animation should take two seconds to complete, and once it has finished, the only element the user should see is an h1 element with the text "Animation complete!".

// $( document ).ready(function() {
//   $('.box').not('#secretBox').width('2px');
//
//   $( "#secretBox" ).animate({
//     opacity: 0.25,
//     left: "+=100",
//     height: "toggle"
//   }, 2000, function() {
//     //remove the #container div
       // append an h1 to the body
       //center the h1
//   });
//
// });
