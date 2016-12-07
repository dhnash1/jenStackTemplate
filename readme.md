JEN Stack Template
==================

Basic JQuery, Node, Express template. Connects a client to a server on port 8080. Basic routes are set up for the index.html on the base url, as well as a 'testGet' route and a 'testPost' route which fire on button clicks.

Setup:
-----
* fork/clone this repo
* npm install in the folder into which you have cloned
* run 'npm start' to spin up the server
* check localhost://8080 in your browser
* test the button clicks and check for your output in the console

Completing the project:
----------------------
* display info from testGet call on the DOM [X]
* add input fields for a new event: eventName, athleteName, award[X]
* change the testPost button to get this user input and create a new object with this data[X]
* change the test post to send this object to the server[X]
* log out the req.body on the server side (should be this user input)[X]
* create an array of events on the server side and push new objects to it [x]
* have the server respond with a new object that has this array within
* log out that array in the browser console when received
* display those awards on the DOM

Tuesday night changes by Andy:
------------------------------
* Removed "getData" button, and client-side event listener. The assignment doesn't require any of these.
* Re-assigned server-side testGet app.get section to initial transfer of array. This now runs
without a button, and send the initial array to the client. Client requests it on document
ready.
* Instead of starting with an empty array of athletes and awards in app.get, started array out with three objects. This was mainly to refine the DOM display part (so you didn't have to enter new people each time), and to work on the hard/pro modes. The assignment tells us to make the global array, but doesn't say it has to be empty. So now it's not.
* Changed the name of the client-side js file from "genericScript.js" to "client.js".
* Button is now "addAwardButton", both in index.html and in client.js.
* Re-formatted the client.js DOM output as a table rather than as lines of text, to make it easier to style in CSS.
* Added empty stylesheets/styles.css in /public, and <link> to it in index.html.
