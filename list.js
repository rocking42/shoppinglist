var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
     var text = $('input#todo').val(); 
     var html = template(text);
    $('div.list').append(html);
    $("input#todo").val("");
    
    return false;  
  });
  $('.list').on("click",'.glyphicon-star',function() {
        $(this).toggleClass('active');
});
	$('.list').on("click",'.glyphicon-remove',function() {
        $(this).parent().remove();
	});
  
};

$(document).ready(main);