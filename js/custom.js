$(function() {
  ////
  // Expanding search bar in header.
  ////
  var $search_toggle = $('#searchToggle');
  var $search_form = $('#searchForm');

  // Function for displaying the search form. Expands the form and
  // hide the search form toggle.
  var showSearchForm = function() {
    $search_toggle.css('visibility', 'hidden');
    $search_form.addClass('expanded').focus();
  };

  // Function for hiding the search form. Contracts the form and
  // shows the search form toggle.
  var hideSearchForm = function() {
    $search_toggle.css('visibility', 'visible');
    $search_form.removeClass('expanded');
  };
  
  // Show the search bar if the search form toggle is clicked.
  $search_toggle.click(function() {
    showSearchForm();
  });
  
  // Hide the search bar only if no text has been entered.
  $search_form.blur(function() {
    if(!this.value) {
      hideSearchForm();
    }
  });
  
  // Show the search bar when input is focused (for accessability).
  $search_form.focus(function() {
    showSearchForm();
  });


  ////
  // Initialize the QD image slider if one is present.
  ////
  if ($('.headline-slider').length) {
    var qdSlider = new Foundation.Orbit($('.headline-slider'), {
      animInFromLeft: 'fade-in',
      animInFromRight: 'fade-in',
      animOutToLeft: 'fade-out',
      animOutToRight: 'fade-out',
      containerClass: 'headline-slider-container',
      slideClass: 'headline-slider-slide',
      boxOfBullets: 'headline-slider-bullets',
      nextClass: 'headline-slider-next',
      prevClass: 'headline-slider-previous',
    });
  }


  ////
  // Animation effect for the mobile nav menu toggle.
  ////
  var menuToggle = $('.header-toggle');
  menuToggle.click(function() {
    $(this).toggleClass('active');
  });


  ////
  // Initialize parallax scroll background image effect.
  ////
  $('.parallax-scroll').parallax({
    speed: -0.2,
    sliderSelector: '>.parallax-scroll-slider',
  });


  ////
  // Change color of select element once changed to allow for a placeholder
  // color on unchanged select elements.
  ////
  $('select').change(function() {
    if($(this).val !== '') {
      $(this).css('color', '#4b2e83');
    }
  });


  ////
  // Remove invalidation from form elements that have changed.
  ////
  $('input, textarea').change(function() {
    if($(this).hasClass('wpcf7-not-valid')) {
      $(this).removeClass('wpcf7-not-valid');
      $(this).siblings('.wpcf7-not-valid-tip').hide();
    }
    $(this).parents('.wpcf7-not-valid').siblings('.wpcf7-not-valid-tip').hide();
  });


  ////
  // Hide WordPress generated ellipsis on pagination.
  ////
  $('.page-numbers.dots').html('-');
});