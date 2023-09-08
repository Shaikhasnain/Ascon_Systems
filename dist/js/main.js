$ = jQuery;

jQuery(function () {
  jQuery('#menuToggle').on('click', function () {
    jQuery('body').toggleClass('open-nav');
  });
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

AOS.init({
  once: true
});

let navItems = jQuery('.header__nav').children('ul').find('.dropdown>a');
navItems.each(function(i, event){
  jQuery(event).on('click', function(event){
    if(jQuery(window).width() < 1200) {
      event.preventDefault();
      jQuery(this).next('.submenu__wrapper').slideToggle();
    }
  });
});


function menuResizer() {
  let navbarItems = jQuery('.header__nav').children('ul').find('.dropdown');
  let firstItempos;
  navbarItems.each(function (i, event) {
    if (i == 0) {
      firstItempos = jQuery(this).position().left / 2;
    }
    let navitemPos = jQuery(this).position().left - firstItempos;
    let navitemWidth = jQuery(this).innerWidth();
    let itemWidth = firstItempos + navitemWidth - 20;
    jQuery(this).find('.submenu__wrapper').css({ 'left': navitemPos + 'px', '--itemWidth': itemWidth + 'px' });
    jQuery(this).find('.submenu__wrapper').find('.icon').css({ 'left': itemWidth + 'px' });
  });
}

menuResizer();

jQuery(window).on('resize', function () {
  menuResizer();
});

// Gallery Popup Js 
function gallery_main_slider() {
  var slider = new Swiper('.gallery-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  var thumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: '4',
    // centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
  });

  slider.controller.control = thumbs;
  thumbs.controller.control = slider;
}

var slider2 = new Swiper('.product-gallery-slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var thumbs2 = new Swiper('.product-gallery-thumbs', {
  slidesPerView: '3',
  // centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  slideToClickedSlide: true,
});

slider2.controller.control = thumbs2;
thumbs2.controller.control = slider2;

var slider3 = new Swiper('.why-choose__slider', {
  slidesPerView: 5,
  spaceBetween: 24,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Swiper: facilities
var slider4 = new Swiper(".ad-facilities__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var slider5 = new Swiper(".ad-ceremonies__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var slider6 = new Swiper(".ad-reception__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var slider7 = new Swiper(".why-gallery", {
  slidesPerView: 4.2,
  loop: true,
});

// popup slider

function ad_popup_slider() {
  var swiper = new Swiper(".ad-popup__slider", {
    spaceBetween: 40,
    slidesPerView: 3,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      },
    }
  });
}

var slider9 = new Swiper(".product-prodoffer-slider", {
  spaceBetween: 40,
  slidesPerView: 3,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }
});

var slider10 = new Swiper(".why-cyrospa__slider", {
  spaceBetween: 100,
  slidesPerView: 4,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 50
    },
    1680: {
      slidesPerView: 4,
      spaceBetween: 100
    },
  }
});

var slider11 = new Swiper(".ad-meetteam__slider", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// FAQ's Js
jQuery('.ad-faqs__item').each(function () {
  jQuery(this).children('.q').on('click', function () {
    jQuery(this).next().slideToggle("1000");
    jQuery(this).parent().siblings().children('.a').slideUp();
    let spanText = jQuery(this).children('span').text();
    if (spanText == '+') {
      jQuery(this).children('span').html('-')
    } else {
      jQuery(this).children('span').html('+')
    }
  });
});

// Popup JS
jQuery('.ad-thingd-do__block').on('click', function (event) {
  event.preventDefault();
  jQuery('body').addClass('open-nav stopScrolling');
});
jQuery('.close').on('click', function () {
  jQuery('body').removeClass('open-nav stopScrolling');
});

// Tab Js

$('.navbar__tab li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.navbar__tab li').click(function () {
  $('.navbar__tab li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$('.quicklinks__items li').each(function () {
  jQuery(this).on('click', function () {
    let itemAttr = $(this).find('a').attr('href').replace('#', '');
    if (itemAttr == 'reception' || itemAttr == 'ceremonies') {
      jQuery('.navbar__tab li').each(function () {
        let dataID = jQuery(this).children('a').attr('data-id');
        if (itemAttr == dataID) {
          console.log('if' + dataID);
          jQuery(this).children('a').attr('data-id', dataID).trigger('click');
        }
      })
    }
  });
});

// Selects clicked tab-nav
// Selects current content tab
// Selects previous active tab
// Selects previous content tab
// Removes classes of previous tabs
// Adds classes for clicked tab
function changeTab(element) {
  var currentTabNav = $(element).closest('.tab-nav');
  var currentContentTab = $('div[data-tab="' + element.children('a').attr('href') + '"]');
  var previousTab = currentTabNav.find('.tab-nav__item.active');
  var previousContentTab = $('div[data-tab="' + previousTab.children('a').attr('href') + '"]');
  previousTab.removeClass('active');
  previousContentTab.removeClass('active');
  element.addClass('active');
  currentContentTab.addClass('active');
}

// Change tab and content tab whenever a tab is clicked
$('.tab-nav__item a').click(function (e) {
  e.preventDefault()
  var element = $(e.target.parentElement);
  changeTab(element);
});

function img2svg() {
  jQuery('.in-svg').each(function (i, e) {
    var $img = jQuery(e);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });
}
img2svg();