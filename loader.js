$(document).on('turbolinks:load', function(){

  var html = "";

  html += "<div id='loader' style='display:none;'>"
    html += "<div class='vcenter'>" 
      html += "<h3 id='text' style='text-align: center;'>"
        html += "<div class='the-spinner'>"
          html += "<svg class='circular' viewBox='25 25 50 50'>"
            html += "<circle class='path' cx='50' cy='50' r='20' fill='nmone' stroke-width='2' stroke-miterlimit='10' />"
          html += "</svg>"
        html += "</div>"
      html += "</h3>"
    html += "</div>"
  html += "</div>"

  $('body').prepend(html);

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
