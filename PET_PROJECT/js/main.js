// Transition
$(".nav__links").on('click', function() {
  let wrapper = $(this).attr('href')
  let wrapperPosition = $(wrapper).offset().top
  $('html, body').animate({
      scrollTop: wrapperPosition
  }, 1000)
});

// Numbers animation
$(document).ready(function(){
    $('.percent').spincrement({
        duration: 3000,
    })
});

// SLICK-SLIDER
$(document).ready(function(){
    $(".header__slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
      // arrows: false
    });
});

// FORM VALIDATION
$(document).ready(function(){
		
  let validName = false;
  let validEmail = false;

  $("form").submit(function(event){
    event.preventDefault();

    let name = $("#name").val();
    let email = $("#email").val();

    $(".error").remove();

    if(name == "") {
      $('#name').after('<span class="form__error">Enter a valid name</span>');
      validName = false;
    } else {
      validName = true;
    }

    if(email == "") {
      $('#email').after('<span class="form__error">Enter a valid email</span>');
      validEmail = false;	
    } else {
      validEmail = true;	
    }

    if(validName == true && validEmail == true) {
      $("form").unbind('submit').submit();
    }

  });

});