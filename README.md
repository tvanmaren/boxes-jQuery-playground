# jQuery Playground

The html for this exercise renders a grid of colorful boxes that can be used as a playground for learning how to use jQuery.

Each exercise below is meant to function independently of the previous exercise. In other words, after completing an exercise, comment it out before working on the next one!

### DOM Ready

Reference [this page](https://learn.jquery.com/using-jquery-core/document-ready/). Use three different methods to ready the document for querying, alerting the user with the message, "Ready for DOM manipulation!"

### Exercises

Go to the [MDN docs for selectors](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors).  Read through the docs to get an idea of how selectors work.  Next, look at the [jQuery page on selectors](https://learn.jquery.com/using-jquery-core/selecting-elements/).

1. Select the secretBox on the page (There is more than one way to select this element. Challenge yourself to use a couple different methods!). Set its background color to white.  Add to it an h1 tag with the text, "secret box!"

2. Change all red boxes to white.

3. Find all child divs of the first row. Print to the console the number of items returned from this query, and set the class for each div to boxType3. Then, check to make sure that the class was successfully added.

4. Make the last box in the last row disappear. (Hint, look into the display style). Log to the console what is returned from your query selector. Can you explain what is returned?

5. Create a variable to store the first two divs in the second row (Hint: there's a jQuery traversal method that makes this 'easy'). Then, remove all styling from these two divs.

6. Get all divs inside the container that are not row divs and are not the secret box div.  Set the width of the divs to 2 pixels. Then, log to the console a boolean that confirms that the width was correctly applied.

7. Using the toggle() method, make the document body disappear. Can you explain how this works? Then, make the body toggle out quickly and then back into view slowly by adding arguments to the toggle method.

8. Make the third div in each row invisible (this is different than display: none).

9. Create a copy of the first row. Attach it to the bottom of the grid (it should the last child in the container div). Confirm that this was successful by logging to the console the number of divs with a class of 'box' (result should be 20). Then, create a function "addRows" with two parameters: one that specifies which row to clone, and one that determines the number of cloned rows to add. (Challenge: How could you make this function even more "customizable"?)

10. Delete each box that has a class of "boxType1" and is the first box in its row.

11. Label each of the boxes in numerical order.

12. Store in a variable all divs that have a parent div with a class of "row". For each of these returned divs, console.log() the boolean "true" if the div has a class of "boxType1", and "false" if the div has a class of "boxType2" or "boxType3".

13. Apply an animation to the secretBox. The animation should take two seconds to complete, and once it has finished, the only element the user should see in the browser window is a nicely centered h1 element with the text "Animation complete!".

###Refactor!

If you have time, modularize and abstract the code you've written above by creating functions with customizable parameters.

### Play!

All finished with the above exercises? Take some time to play with jQuery methods that you didn't use for the exercises above!

Look through the various methods on the [Intro to jQuery Learn page](https://learn.galvanize.com/content/gSchool/browser-dom-curriculum/master/jQuery/README.md), jQuery [manipulation](http://api.jquery.com/category/manipulation/), jQuery  [selectors](http://api.jquery.com/category/selectors/), and jQuery [traversal](http://api.jquery.com/category/traversing/) docs.

Create hypotheses about what these various methods return or do, and test them. For example: You might wonder at some point about the difference between the .get() and .eq() methods. Use your burgeoning doc-reading and code-testing skills to find an answer! Document your exploration, and be prepared to share some of your findings with your instructors and classmates at the end of the day.
