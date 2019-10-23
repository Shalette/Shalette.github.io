$( document ).ready(function(){
  resize();
  function resize(){
    var width = $(window).width();
    var height = $(window).height();
    var x = document.getElementsByTagName("img");
    for (i=0; i<x.length; i++) {
      $(x[i]).height(height-20);
    }
    $('#parallax').height(height);
  }

  $(window).scroll(function()  {
    parent =  document.getElementById('parallax');
    children = parent.getElementsByTagName('img');
    for(let i = 0; i < children.length; i++) {
      children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
  });

  $(window).resize(function() {
    resize();
  });

});
