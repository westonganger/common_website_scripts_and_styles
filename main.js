//= require jquery
//= require rails-ujs
//
//= require turbolinks

/*
$(document).ready(function(){
  $(document).trigger('turbolinks:load');
});
*/

$(document).on('turbolinks:load', function(){
  /* Disable Turbolinks on tel/mail links, might only be needed if using js spinner on page loads */
  $("a[href^='#'], a[href^='/#'], a[href^='tel'], a[href^='mailto']").attr('data-turbolinks','false');

  /* Disable Autocomplete */
  $('form').prop('autocomplete','off').attr('novalidate', true);
});

$(document).on("click", "a.slow, button.slow", function(){
  $("#loader").show();
});

$(document).on('submit', "form[enctype='multipart/form-data'], form.slow", function(){
  $("#loader").show();
});

/* Disabled because Turbolinks is so fast it doesnt require a loader */
/*
$(window).on('beforeunload', function(){
  if(!window.skipLoader){
    $('#loader').show();
  }
});
*/
