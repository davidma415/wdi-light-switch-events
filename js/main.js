var light = document.querySelector('.switch.on');
var background = document.querySelector('.light');
var message = document.querySelector('.status');

light.addEventListener('click', function() {
  light.classList.toggle('off');
  background.classList.toggle('dark');

  if (light.classList.contains('off')) {
    message.innerHTML = 'Hey, who turned the lights off?'
  } else {
    message.innerHTML = "It's too bright in here!";
  }
})
