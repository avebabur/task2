var layers = document.querySelectorAll('[data-speed]');

window.addEventListener('scroll', function () {
  layers.forEach(function (layer) {
    // how far we have scrolled past the top of the layer's own section
    var scrolled = -layer.parentElement.getBoundingClientRect().top;
    var speed = layer.dataset.speed;
    var rotate = layer.dataset.rotate || 0;

    layer.style.transform = 'translateY(' + scrolled * speed + 'px) rotate(' + scrolled * rotate + 'deg)';
  });
});
