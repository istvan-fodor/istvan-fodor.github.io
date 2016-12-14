$(() => {
  $("span.toggle a").click(ifodor.clickHandler);
  document.title = "Hello World!"
});

ifodor = {};

ifodor.clickHandler = function() {
  if ($(this).attr("data-opens")) {
    var opens = $(this).attr("data-opens").split();
    $(opens).each( (i, elem) => {
      $("#"+elem).addClass("on").removeClass("off");
    });
  }
  if ($(this).attr("data-closes")) {
    var closes = $(this).attr("data-closes").split();
    $(closes).each( (i, elem) => {
      $("#"+elem).addClass("off").removeClass("on");
    });
  }
  if ((typeof $(this).attr("data-removelink")) != "undefined") {
    console.log($(this).html())
    var html = $(this).html();
    $(this).after($(this).html()).remove();
  }
}
