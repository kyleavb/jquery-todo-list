
$('ul').sortable();
$('ul').disableSelection();

function removeElement(){
  var parent = this.parentNode
  parent.parentNode.removeChild(parent);
}
function highlightButton(obj){
  obj.hover(function(){
    $(this).css("opacity", "1");
  }, function(){
    $(this).css("opacity", ".8");
    $(this).css("transform", "rotate(0deg)");
  });
}
function rotateButton(obj,deg){
  obj.hover(function(){
    $(obj).css("transform", "rotate("+deg+"deg)");
  }, function(){
    $(obj).css("transform", "rotate(0deg)");
  });
}

highlightButton($('.button'));
rotateButton($('.addbutton'), 45);

$('.addbutton').on("click", function(){
  $('.overlay').css("display", "table");
  $('.taskText').focus();
});

$('.formclose').on("click",function(e){
  $('.overlay').css("display", "none");
})



$('#newListItem').on("submit", function(e){
  e.preventDefault();
  var text = $('.taskText').val();
  $('.taskText').val("");
  text = 'Task: ' + text;
  if(text){
    var item = $('.unordered').append('<li class="listItem">' + text + '<img class="close" align="right" src= img/cancel.png>');
    $('.overlay').css('display', "none");
    $('.close').on("click", removeElement);
  }
});
