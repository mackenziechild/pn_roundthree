// Back to Top button
$("#back-to-top").hide();

$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});

	// scrolls back up to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
});

$(".miniHeader").hide();

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 171) {
      $('.miniHeader').fadeIn('fast');
    } else {
      $('.miniHeader').fadeOut('fast');
    }
  });
});

$('.showReferences').click(function(e) {
	e.preventDefault();
  $('.references').fadeIn(500)
  $('.showReferences').fadeOut(500)
});

// Changes navigation upon resize below 600px to list icon with dropdown menu.

$("#nav").addClass("js");
$("#nav").addClass("js").before('<div id="menu"><i class="icon-reorder"></i></div>');
$("#menu").click(function(){
	$("#nav").toggle();
});
$(".miniNavigation").addClass("js");
$(".miniNavigation").addClass("js").before('<div id="miniMenu"><i class="icon-reorder"></i></div>');
$("#miniMenu").click(function(){
	$(".miniNavigation").toggle();
});
$(window).resize(function(){
	if(window.innerWidth > 600) {
		$("#nav, .miniNavigation").removeAttr("style");
	}
});

// Responsive videos

$("#video").fitVids();