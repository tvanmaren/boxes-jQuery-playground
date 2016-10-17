# jQuery Playground

A grid of colorful boxes that can be used as a jQuery playground for learning selectors, events, etc.

### Exercise 1 - DOM Ready

Reference [this page](https://learn.jquery.com/using-jquery-core/document-ready/). Add a callback function to ready that alerts a message saying, ready for DOM manipulation.  Try using both styles of callbacks.

### Exercise 2 - Selectors, CSS, Attributes

Go to the [MDN docs for selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).  Read through the docs to get an idea of how selectors work.  Next, look at the [jQuery page on selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/).

1. Find the secretBox on the page. Set the background color to white.  Add an h1 tag that says, "secret box!"
2. Find all child divs of the first row.  Set the class for each div to boxType3.
3. Make the last box in the last row disappear. (Hint, look into the dispaly style.  Also, you should only get back one element from your selector.).
4. Change all red boxes to white.
5. Get the first two divs in the second row.  Take away all styling from the divs.
6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels.

### Stretch Exercises

//Apply some kind of animation to the secretBox. The animation should take two seconds to complete, and once it has finished, the only element the user should see is an h1 element with the text "Animation complete!".
