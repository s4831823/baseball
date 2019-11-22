
function revealOnScroll() { 
  var scrolled = $(window).scrollTop(); 
  // 视窗，即viewport，页面可视范围的窗口 
  $(".section").each(function(){ 
    var current = $(this), // 当前元素 
      w_height = $(window).outerHeight(), //视窗高度 
      offsetTop = current.offset().top; //当前元素离顶部的高度 
    // 计算高度差（此处预留50是为了看效果） 
    // 当元素进入视窗时，添加class 
    if (scrolled + w_height > offsetTop) { 
      current.addClass("fadeInLeft"); 
    } else { 
      current.removeClass("fadeInLeft"); 
    } 
  }); 
} 
$(window).on("scroll", revealOnScroll); 
function revealOnScrollright() { 
  var scrolled = $(window).scrollTop(); 
  // 视窗，即viewport，页面可视范围的窗口 
  $(".sectionright").each(function(){ 
    var current = $(this), // 当前元素 
      w_height = $(window).outerHeight(), //视窗高度 
      offsetTop = current.offset().top; //当前元素离顶部的高度 
    // 计算高度差（此处预留50是为了看效果） 
    // 当元素进入视窗时，添加class 
    if (scrolled + w_height > offsetTop) { 
      current.addClass("fadeInRight"); 
    } else { 
      current.removeClass("fadeInRight"); 
    } 
  }); 
} 
$(window).on("scroll", revealOnScrollright);
 function revealOnScrolldown() { 
  var scrolled = $(window).scrollTop(); 
  // 视窗，即viewport，页面可视范围的窗口 
  $(".sectiondown").each(function(){ 
    var current = $(this), // 当前元素 
      w_height = $(window).outerHeight(), //视窗高度 
      offsetTop = current.offset().top; //当前元素离顶部的高度 
    // 计算高度差（此处预留50是为了看效果） 
    // 当元素进入视窗时，添加class 
    if (scrolled + w_height > offsetTop) { 
      current.addClass("fadeInUp"); 
    } else { 
      current.removeClass("fadeInUp"); 
    } 
  }); 
} 
$(window).on("scroll", revealOnScrolldown);
function sticky() { 
  var scrolled = $(window).scrollTop(); 
  // 视窗，即viewport，页面可视范围的窗口 
  $(".sticky").each(function(){ 
    var current = $(this), // 当前元素 
      w_height = $(window).outerHeight(), //视窗高度 
      offsetTop = current.offset().top; //当前元素离顶部的高度 
    // 计算高度差（此处预留50是为了看效果） 
    // 当元素进入视窗时，添加class 
    if (scrolled + w_height > offsetTop) { 
      current.addClass("stickyshadow"); 
    } else { 
      current.removeClass("stickyshadow"); 
    } 
  }); 
} 
$(window).on("scroll", sticky);