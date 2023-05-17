$(function(){

  let $tabButtons = $('#tabMember>li');
  let $tabContents = $('.memberContent');

  $tabButtons.on("click", function(){

    if($(this).is( ".on")) return;

    $(this).addClass("on").siblings().removeClass("on");

    $tabContents.removeClass("on");

    let index = $(this).attr("data-index");

    $tabContents.eq(index).addClass("on");


  })
  
})