// Back to Top button
$("#back-to-top").hide();$(function(){$(window).scroll(function(){$(this).scrollTop()>500?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()});$("#back-to-top").click(function(){$("body,html").animate({scrollTop:0},700);return!1})});$(".miniHeader").hide();$(function(){$(window).scroll(function(){$(this).scrollTop()>171?$(".miniHeader").fadeIn("fast"):$(".miniHeader").fadeOut("fast")})});$(".showReferences").click(function(e){e.preventDefault();$(".references").fadeIn(500);$(".showReferences").fadeOut(500)});$("#nav").addClass("js");$("#nav").addClass("js").before('<div id="menu"><i class="icon-reorder"></i></div>');$("#menu").click(function(){$("#nav").toggle()});$(".miniNavigation").addClass("js");$(".miniNavigation").addClass("js").before('<div id="miniMenu"><i class="icon-reorder"></i></div>');$("#miniMenu").click(function(){$(".miniNavigation").toggle()});$(window).resize(function(){window.innerWidth>600&&$("#nav, .miniNavigation").removeAttr("style")});$("#video").fitVids();