'use strict';

// ******* EXERCISE 1 *******

//Add a callback function to ready that alerts a message saying, ready for DOM manipulation. Try using both styles of callbacks.

//Method #1
$( document ).ready(function() {
    //console.log( "ready for DOM manipulation!" );
});

//Method #2
$(function() {
    //console.log( "this is the shorthand version" );
});

//Method #3
function readyFn() {
    // Code to run when the document is ready.
    //console.log("named function version");
}
$( document ).ready( readyFn );


// ******* EXERCISE 2 *******
// Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"

$( document ).ready(function() {
    // var secretBox = $("#secretBox");
    // secretBox.css('background-color', 'white').html("<h1>secret box!</h1>");
});

// Find all child divs of the first row. Set the class for each div to boxType3.

$( document ).ready(function() {

    //shorthand
    //$("#row1").children().addClass('boxType3');

    //longhand
    // var firstRow = $("#row1");
    // var kiddos = firstRow.children();
    // kiddos.addClass('boxType3');

    //STRETCH: REMOVE CLASSES BOXTYPE1 & BOXTYPE2 BEFORE ADDING BOXTYPE3


});

// Make the last box in the last row disappear. (Hint, look into the display style. Also, you should only get back one element from your selector.).

// $( document ).ready(function() {
//     var lastBox = $("#row4").children().last();
//     lastBox.css('display', 'none');
// });


// Change all red boxes to white.

// $( document ).ready(function() {
//     $('.boxType1').css('background-color', 'white');
// });

// Get the first two divs in the second row. Take away all styling from the divs.
//help students by reminding them to check what the selector returns. If it's an array, what array methods can they use on the collection of returned divs? Next, ask them how styles are applied to these divs (classes).

// $( document ).ready(function() {
//     $('#row2 div').slice(0,2).removeClass();
// });


// Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.

$( document ).ready(function() {
  $('.box').not('#secretBox').width('2px');
});




// ****** EXTRA TASKS ********

//Apply some kind of animation to the secretBox. The animation should take two seconds to complete, and once it has finished, the only element the user should see is an h1 element with the text "Animation complete!".

$( document ).ready(function() {
  $('.box').not('#secretBox').width('2px');

  $( "#secretBox" ).animate({
    opacity: 0.25,
    left: "+=100",
    height: "toggle"
  }, 2000, function() {
    alert('animation complete!');
  });

});
