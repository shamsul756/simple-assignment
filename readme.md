
<!-- 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->
=>> getElementById ()uses when we want to catch id ,it return a single element .

=>> getElementsByClassName() uses when we are selects by class name ,it return a html collection.it contain multiple element .

=>> querySelector() it selects first machine element.

=>> querySelectorAll() selects all machine elements .return a nodelist

<!-- 2. How do you create and insert a new element into the DOM? -->

=>> document.createElement() – create the element

Modify it (text, attributes, classes, etc.)

Use appendChild(), append() to add it to the DOM

<!-- 3.What is Event Bubbling? And how does it work? -->

=>>> enent bubbling is a DOM event machanism where an event starts at the target element and then bubbles up through its parent elements untill it reaches the root .hes the root

<!-- 4.What is Event Delegation in JavaScript? Why is it useful? -->

=>>> event delegation is a process where we attach a single event listener to a parent element.

<!-- 5. What is the difference between preventDefault() and stopPropagation() methods? -->

=>> preventDefault() is the prevents the default behavior of an element . 

 stopPropagation() is the prevents the event form moving to parent elements.

