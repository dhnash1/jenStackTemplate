// console.log( 'Client.js sourced.' );

localArray = [];

$(document).ready(function(){
//  console.log( 'jQuery document ready.' );

  $.ajax({
    /* Right off the bat, without any button needed, we'll fire
    a GET request to get the initial array to display, and
    display it on the DOM. */
    type: 'GET',
    url: '/testGet',
    success: function(response){
      localArray = response.awardArray;
      displayArray(localArray);
    },
    error: function(){
      console.log( 'error with ajax call...');
    }
  });

  var postData = function(){
    /* Called by addAwardButton event listener. Function retrieves
    contents of three text input boxes from the DOM, puts them
    into an athlete award object, and then sends this object to
    the server via an AJAX POST request. In return, the server respnds
    with the full array of all athlete awards, and this info is appended
    to the DOM. */
    console.log('in postData');
    // Assemble award object to send:
    var awardObjectToSend = {
      eventName: $('#eventName').val(),
      athleteName: $('#athleteName').val(),
      award: $('#award').val()
    }; // end awardObjectToSend
    $.ajax({
      type: 'POST',
      url: '/testPost',
      data: awardObjectToSend,
      success: function(response){
        // Displays array delivered by server as a table.
        localArray = response.awardArray;
        displayArray(localArray);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end postData

  $('#addAwardButton').on( 'click', function(){
    // Button handler
    console.log('in addAwardButton on click');
    postData();
  }); // end addAwardButton handler

  $('#alphabetizeButton').on( 'click', function(){
    // Adapted from MDN reference:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    localArray.sort(function(a, b) {
      var nameA = a.eventName.toUpperCase(); // ignore upper and lowercase
      var nameB = b.eventName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
    displayArray(localArray);
  });

  $(document).on('click', 'tr', function(){
    var athleteFilter = $(this).data('athlete');
//    console.log(athleteFilter);
    for (var i = (localArray.length - 1); i >= 0; i--) {
      if (localArray[i].athleteName != athleteFilter) {
        localArray.splice(i, 1);
      }
    }
    displayArray(localArray);
  });

  function displayArray(arr) {
    var tableText = '<table>\n<tr>\n<th class="event-column">Event</th>\n<th class="athlete-column">Athlete</th>\n<th class="award-column">Award</th>\n</tr>\n';
    for (var i = 0; i < arr.length; i++) {
      tableText += '<tr data-athlete="' + arr[i].athleteName + '">\n<td>' + arr[i].eventName + '</td>\n';
      tableText += '<td>' + arr[i].athleteName + '</td>\n';
      tableText += '<td>' + arr[i].award + '</td>\n</tr>\n';
    }
    tableText += '</table>';
    $('#awardList').html(tableText);
  } // end displayArray

}); //end doc ready
