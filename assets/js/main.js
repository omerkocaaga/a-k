$( document ).ready(function() {
  $("#rate").click(function(){
      var text_val = $("#txt_name").val();
      var filter = ["am", "sik", "yarak"];
      var total = 0;

      for(var i=0; i < filter.length; i++){
        var pattern = new RegExp('\\b' + filter[i] + '\\b', 'g');
        var num = text_val.match(pattern) ? total++ : 0;
      }

      $("#res").html(total);
      console.log(total);
  });

  $("#txt_name").keyup(function(event) {
    if (event.keyCode === 13) {
      $("#rate").click();
      $(".modal").fadeToggle( "slow" );
    }
  });

  $("#tryAgain").keyup(function(event) {
    if (event.keyCode === 13) {
      $(".modal").fadeToggle( "slow" );
      $("#txt_name").val('');
    }
  });

  $("#tryAgain").click(function(){
    $(".modal").fadeToggle( "slow" );
    $("#txt_name").val('');
  });

});
