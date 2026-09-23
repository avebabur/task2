var layers = document.querySelectorAll('[data-speed]');

window.addEventListener('scroll', function () {
  var scrolled = window.pageYOffset;

  layers.forEach(function (layer) {
    var speed = layer.dataset.speed;
    var rotate = layer.dataset.rotate || 0;

    layer.style.transform = 'translateY(' + scrolled * speed + 'px) rotate(' + scrolled * rotate + 'deg)';
  });
});
