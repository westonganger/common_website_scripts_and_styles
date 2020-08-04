$(document).on('turbolinks:load', function(){
  /* Fix areYouSure popup upon submit for <form> elements that have been replaced using JS */
  $("form").submit(function(){
    $(this).removeClass('dirty');
  });
});

/* Adds Are You Sure warning before leaving a page with unsaved changes */
$('form:not([data-dirty-check])')
  .areYouSure({message: "Warning: You have unsaved changes.", addRemoveFieldsMarksDirty: true})
  .on('cocoon:after-insert cocoon:after-remove',function(){
    $(this).trigger('rescan.areYouSure'); 
  });

/* Fix Incorrect Are You Sure warning for forms that have been submitted after the <form> element has been replaced using JS commonly after AJAX */
$(document).on("submit", "form", function(){
  $(this).removeClass('dirty');
});
