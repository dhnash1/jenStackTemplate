// console.log( 'Client.js sourced.' );

$(document).ready(function(){
//  console.log( 'jQuery document ready.' );

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
        displayArray(response.awardArray);
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end postData

  $( '#addAwardButton' ).on( 'click', function(){
    // Button handler
    console.log( 'in addAwardButton on click' );
    postData();
  }); // end addAwardButton handler

  function displayArray(arr) {
    var tableText = '<table>\n<tr>\n<th class="event-column">Event</th>\n<th class="athlete-column">Athlete</th>\n<th class="award-column">Award</th>\n</tr>\n';
    for (var i = 0; i < arr.length; i++) {
      tableText += '<tr>\n<td>' + arr[i].eventName + '</td>\n';
      tableText += '<td>' + arr[i].athleteName + '</td>\n';
      tableText += '<td>' + arr[i].award + '</td>\n</tr>\n';
    }
    tableText += '</table>';
    $('#awardList').html(tableText);
  } // end displayArray

}); //end doc ready
