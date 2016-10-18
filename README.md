# jQuery Playground

A grid of colorful boxes that can be used as a jQuery playground for learning selectors, events, etc.

### Exercise 1 - DOM Ready

Reference [this page](https://learn.jquery.com/using-jquery-core/document-ready/). Add a callback function to ready that alerts a message saying, ready for DOM manipulation.  Try using both styles of callbacks.

### Exercise 2 - Selectors, CSS, Attributes

Go to the [MDN docs for selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).  Read through the docs to get an idea of how selectors work.  Next, look at the [jQuery page on selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/).

1. Find the secretBox on the page (there is more than one way to select this element. Challenge yourself to use a couple different methods!). Set the background color to white.  Add an h1 tag that says, "secret box!"
2. Change all red boxes to white.
3. Find all child divs of the first row. Print to the console the number of items returned from this query, and set the class for each div to boxType3. Then, check to make sure that the class was successfully added.
4. Make the last box in the last row disappear. (Hint, look into the display style). Log to the console what is returned from your query selector. Can you explain what is returned?
5. Get the first two divs in the second row.  Take away all styling from the divs.
6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels. Then, log to the console a boolean that confirms that the width was correctly applied.

### Stretch Exercises

1. Find all divs that have a parent div with a class of "row". Console.log() the boolean "true" if the div has a class of "boxType1", and "false" if the div has a class of "boxType2" or "boxType2".

1. 7. Using the toggle() method, make the document body disappear. Add one line of code to make it reappear. Can you explain how this works? Then, make the body toggle out quickly and then back into view slowly by adding arguments to the toggle methods.

1. Apply some kind of animation to the secretBox. The animation should take two seconds to complete, and once it has finished, the only element the user should see is an h1 element with the text "Animation complete!".
