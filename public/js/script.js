$(function() {
  $('#form').submit(function(){
    $.ajax({
      url: $('#form').attr('action'),
      data: $('#form').serialize(),
      type: 'POST',
      dataType: 'json',
      statusCode: {
        0: function() {
        },
        200: function() {
        }
      }
    });
    return false;
  });
});