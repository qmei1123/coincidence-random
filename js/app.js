/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#fff", "#ef39fe", "#111111", "#df247c", "#ff8866", "#add1e9", "#ffe4e1", "#67b1ad", "#ffe700"]
      },
      "shape": {
          "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "star": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 1,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 50,
          "size_min": 0.2,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 50,
        "color": "#ffffff",
        "opacity": 1,
        "width": 1.5
      },
      "move": {
        "enable": true,
        "speed": 10,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": true,
          "rotateX": 1200,
          "rotateY": 1200
        }
      }
    },
    
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
        },
        "onclick": {
          "enable": true,
          "mode": "push"
            
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 80,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 10
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#ffffff",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);