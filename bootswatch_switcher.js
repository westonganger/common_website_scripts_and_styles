var theme = localStorage.getItem('bootswatch-theme') || 'default';

if(theme != 'default'){
  /* Add Bootswatch css <link> element to page */
  var s = document.createElement('link');
  s.setAtrribute('rel', 'stylesheet');
  s.setAttribute('href',  || );

  //document.body.appendChild(s);
  document.head.appendChild(s);
}

var theme_select_opts = [
  'Default',
  'Cerulean',
  'Cosmo',
  'Cyborg',
  'Darkly',
  'Flatly',
  'Journal',
  'Litera',
  'Lumen',
  'Lux',
  'Materia',
  'Minty',
  'Pulse',
  'Sandstone',
  'Simplex',
  'Sketchy',
  'Slate',
  'Solar',
  'Spacelab',
  'Superhero',
  'United',
  'Yeti',
].map(function(x)}{ 
  "<option value='"+x.toLowerCase()+"'>"+x+"</option>";
}.join("");

$("body").insert("<select>"+theme_select_opts+"</select>");

$(document).on('select#bootswatch-switcher', 'change', function(){
  localStorage.setItem('bootswatch-theme', $(this).val());

  // Add custom persistence logic here
  console.log('Bootswatch settings are currently only saved to localStorage');

  window.location = window.location;
});
