document.addEventListener('DOMContentLoaded', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  scrollToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  var modal = document.getElementById('myModal');
  var openModalBtn = document.getElementById('openModalBtn');
  var closeModalBtn = document.getElementById('closeModalBtn');

  openModalBtn.onclick = function() {
    modal.style.display = 'block';
  };

  closeModalBtn.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    modal.style.display = 'none';
  });
});
  
var Application = ( function () {
  var canvas;
  var ctx;
  var imgData;
  var pix;
  var WIDTH;
  var HEIGHT;
  var flickerInterval;

  var init = function () {
      canvas = document.getElementById('canvas');
      ctx = canvas.getContext('2d');
      canvas.width = WIDTH = 700;
      canvas.height = HEIGHT = 500;
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.fill();
      imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
      pix = imgData.data;
      flickerInterval = setInterval(flickering, 30);
  };

  var flickering = function () {
      for (var i = 0; i < pix.length; i += 4) {
          var color = (Math.random() * 255) + 50;
          pix[i] = color;
          pix[i + 1] = color;
          pix[i + 2] = color;
      }
      ctx.putImageData(imgData, 0, 0);
  };

  return {
      init: init
  };
}());

Application.init();
