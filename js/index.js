$( document ).ready(function() {

  $('.ui.sticky').sticky();
  var header = document.getElementById("top-menu");
  var sticky = header.offsetTop;
  $(window).scroll(function() {
    if (window.pageYOffset > sticky+50) {
      $('#top-menu').removeClass("secondary pointing sticky");
      $('#top-menu').addClass("fixed");
      $('#arrow').css('opacity', '1');
    } else {
      $('#top-menu').removeClass("fixed");
      $('#top-menu').addClass("secondary pointing sticky");
      $('#arrow').css('opacity', '0');
    }

    var sec = document.querySelectorAll(".sec");
    var secs = {};
    var i = 0;
  
    Array.prototype.forEach.call(sec, function(e) {
      secs[e.id] = e.offsetTop;
    });
  
    for (i in secs) {
      var selection = document.querySelector('.active');
      if (window.pageYOffset >= secs[i]-100) {
        if(selection!==null)
          document.querySelector('.active').setAttribute('class', 'item');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active item');
        console.log(i);
        
      }
      else{
        if (window.pageYOffset <= secs['About'] - 110 && selection !== null){
        document.querySelector('.active').setAttribute('class', 'item');
        }
      }
    }    
  });

  
  var i = 0;
  var txt = "Hi. :) I'm Shalette"; /* The text */
  var speed = 200; /* The speed/duration of the effect in milliseconds */
  setTimeout(typeWriter, 1000);

  function typeWriter() {
  if (i < txt.length) {
      document.getElementById("main").innerHTML += txt.charAt(i);
      if(txt.charAt(i)==")")
          document.getElementById("main").innerHTML += "<br>";
      i++;
      setTimeout(typeWriter, speed);
  }
  }


$(".item").on('click', function(event) {
  $('.item').removeClass("active");
  $(this).addClass("active");
  event.preventDefault();
  $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 120);
  });

  $("#arrow").on('click', function(event) {  
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 120);   
  });

});
