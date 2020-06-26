function navBarShadow() {
  if ($(window).scrollTop() > 70) {
    $('#top-navbar').addClass('scrolled-down');
  }
  else {
    $('#top-navbar').removeClass('scrolled-down');
  }
}

$(document).ready(function() {
  $(window).scroll(function() {
    navBarShadow();
  });
});
