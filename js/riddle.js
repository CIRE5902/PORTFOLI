document.addEventListener("DOMContentLoaded", () => {
    let speed, swing, rotation = 0,
      time, gravity = 1,
      length = 250,
      startAngle = 0;
  
    function startLampSwing() {
      time = 0;
      speed = 1;
      lampSwing();
    }
  
    function stopLampSwing() {
      clearTimeout(swing);
      document.getElementById("lamp").style.transition = "none";
      document.getElementById("lamp").style.transform = `rotate(${rotation}deg)`;
    }
  
    function lampSwing() {
      time += 1;
      if (Math.abs(startAngle) > 0.5) {
        rotation = Math.cos(Math.sqrt(gravity / length) * time) * startAngle;
        document.getElementById("lamp").style.transform = `rotate(${rotation}deg)`;
  
        startAngle *= 0.996;
        swing = setTimeout(lampSwing, 1000 / 60);
      } else {
        rotation = 0;
        document.getElementById("lamp").style.transform = `rotate(${rotation}deg)`;
      }
    }
  
    let mousedown = false,
      startDegree;
    document.querySelectorAll("#lamp .dragable").forEach((element) => {
      element.addEventListener("mousedown", (e) => {
        document.body.classList.add("dragging");
  
        const deltaX = window.innerWidth / 2 - e.pageX;
        const deltaY = 0 - e.pageY;
        const degree = Math.atan(deltaX / deltaY) * (180 / Math.PI);
        startDegree = rotation;
  
        mousedown = {
          start: {
            x: e.pageX,
            y: e.pageY,
            deltaX,
            deltaY,
            degree
          },
          event: e
        };
        stopLampSwing();
      });
    });
  
    document.addEventListener("mousemove", (e) => {
      if (mousedown) {
        const deltaX = window.innerWidth / 2 - e.pageX;
        const deltaY = 0 - e.pageY;
        let degree = Math.atan(deltaX / deltaY) * (180 / Math.PI);
  
        degree = Math.min(Math.max(startDegree + (mousedown.start.degree - degree), -75), 75);
        document.getElementById("lamp").style.transform = `rotate(${degree}deg)`;
        startAngle = degree;
      }
    });
  
    document.addEventListener("mouseup", () => {
      if (mousedown) {
        document.body.classList.remove("dragging");
        mousedown = false;
        startLampSwing();
      }
    });
  
    // Simulate flickering of the bulb
    function flicker() {
      toggleLamp();
      setTimeout(() => {
        toggleLamp();
      }, Math.round(Math.random() * 150 + 100));
  
      setTimeout(flicker, Math.round(Math.random() * 4000 + 100));
    }
  
    flicker();
  
    function toggleLamp() {
      document.getElementById("lamp").classList.toggle("off");
    }
  });

  $(document).ready(function () {
    $('.slider').each(function () {
        var $this = $(this);
        var $group = $this.find('.slide-group');
        var $slides = $this.find('.slide');
        var buttonArray = [];
        var currentIndex = 0;

        const videoUrls = [
          "https://geo.dailymotion.com/player.html?video=x873kpf",
          "https://geo.dailymotion.com/player.html?video=x7vsfd8",
          "https://geo.dailymotion.com/player.html?video=x8x2aoe",
          "https://geo.dailymotion.com/player.html?video=x8x3nvw"
      ];      
        // Función para mover al índice del slide seleccionado
        function move(newIndex) {
          var animateLeft, slideLeft;
      
          if ($group.is(':animated') || currentIndex === newIndex) {
              return;
          }
      
          // Actualiza el botón activo
          buttonArray[currentIndex].removeClass('active');
          buttonArray[newIndex].addClass('active');
      
          if (newIndex > currentIndex) {
              slideLeft = '100%';
              animateLeft = '-100%';
          } else {
              slideLeft = '-100%';
              animateLeft = '100%';
          }
      
          // Muestra el slide correspondiente
          $slides.eq(newIndex).css({ left: slideLeft, display: 'block' });
          $group.animate({ left: animateLeft }, function () {
              $slides.eq(currentIndex).css({ display: 'none' });
              $slides.eq(newIndex).css({ left: 0 });
              $group.css({ left: 0 });
              currentIndex = newIndex;
      
              // Cambia el video del canal al correspondiente en el array videoUrls
              const $iframe = $slides.eq(newIndex).find("iframe");
              $iframe.attr("src", videoUrls[newIndex]); // Actualiza el src del iframe con la URL del nuevo canal
          });
      }
      

        // Genera los botones de canal y asigna el evento de clic a cada uno
        $.each($slides, function (index) {
            var $button = $('<button type="button" class="slide-btn"></button>');
            if (index === currentIndex) {
                $button.addClass('active');
            }
            $button.on('click', function () {
                move(index);  // Mueve al canal correspondiente cuando se hace clic
            }).appendTo('.slide-buttons');
            buttonArray.push($button);
        });
    });
});

