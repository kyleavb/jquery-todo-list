

function removeElement(){
  this.remove();
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
});

$('.formclose').on("click",function(e){
  $('.overlay').css("display", "none");
})

$('#newListItem').on("submit", function(e){
  e.preventDefault();
  var text = $('.taskText').val();
  $('.taskText').val("");
  text = text
  if(text){
    $('.listContainer').append('<li class="listItem">' + text);
    $('.overlay').css('display', "none");
    $('li').on("click", removeElement);
  }
});
