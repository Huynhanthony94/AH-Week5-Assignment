$("document").ready(function() {

$('#submit-btn').click(changeBackground);
$('#reset').click(reset);

function changeBackground(event) {
  event.preventDefault();
  var userInput = $('#city-type').val();
  userInput = userInput.toLowerCase();
  if (userInput === 'nyc' || userInput === 'new york city' || userInput ==='new york') {
    clearBackground();
    $('body').addClass('nyc');
  } else if (userInput === 'sf' || userInput === 'san francisco' || userInput === 'bay area') {
    clearBackground();
    $('body').addClass('sf');
  } else if (userInput === 'la'|| userInput === 'lax' || userInput === 'los angeles') {
    clearBackground();
    $('body').addClass('la');
  } else if (userInput === 'austin' || userInput === 'atx') {
    clearBackground();
    $('body').addClass('austin');
  } else if (userInput === 'sydney' || userInput ==='syd'){
    clearBackground();
    $('body').addClass('sydney');
  }
}

function clearBackground() {
  $('body').removeClass('nyc sf la austin sydney')
}

});
