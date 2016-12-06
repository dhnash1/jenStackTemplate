console.log( 'genero sourced' );

$( document ).ready( function(){
  console.log( 'JQ' );

  // test get function
  var getData = function(){
    console.log( 'in getData' );
    $.ajax({
      type: 'GET',
      url: '/testGet',
      success: function( response ){
        $('#box').append( 'back from get call:', response.field0 );
      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end getData

  // test get function
  var postData = function(){
    console.log( 'in postData' );
    // assemble object to send
    var objectToSend={
      eventName: $('#eventName').val(),
      athleteName: $('#athleteName').val(),
      award: $('#award').val()
    }; // end object to send
    $.ajax({
      type: 'POST',
      url: '/testPost',
      data: objectToSend,
      success: function( response ){
        console.log( 'back from post call:', response );
        var vari = response.field0;
        $('#box').html("");
        for (var i = 0; i < vari.length; i++) {

          $('#box').append('Award: ' + vari[i].award + " ");
          $('#box').append('In: ' + vari[i].eventName + " ");
          $('#box').append('For: ' + vari[i].athleteName + '<br>');
        }

      },
      error: function(){
        console.log( 'error with ajax call...');
      }
    });
  }; // end getData

  /// - buttons to test - ///
  $( '#testGetButton' ).on( 'click', function(){
    console.log( 'in testGetButton on click' );
    getData();
  }); // end testGetButton
  $( '#testPostButton' ).on( 'click', function(){
    console.log( 'in testPostButton on click' );
    postData();

  }); // end testGetButton

}); //end doc ready
