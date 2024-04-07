function myFunction() {
  document.getElementById("head-soc").classList.toggle("show");
}
var num = 0;

function res(a) {
  if (a == 'GitHub') {
    document.getElementById("para").innerHTML = "Check out our projects, they're cool ";
    document.getElementById("heading").innerHTML = "Our <br> Github page!!";
    // window.open("https://github.com/Centigrade2020", "_blank");
    num++;
  }
  else if (a == 'email') {
    document.getElementById("para").innerHTML = "We'll get back soon";
    document.getElementById("heading").innerHTML = "E-mail <br> us !!";
    // window.open("mailto:centigrade.ad@gmail.com?subject=[Enquiry]%20Development Services&cc=hrithikmj003@gmail.com;dharundds@gmail.com;dharunsivakumar002@gmail.com");
    num++;
  }
  else {
    document.getElementById("heading").innerHTML = "social <br> links!!";
    document.getElementById("para").innerHTML = "";
  }
}
function out() {
  if (num > 100) {
    document.getElementById("para").innerHTML = "Chumma irra";
  }
  else {
    document.getElementById("para").innerHTML = "We make cool websites , apps and more at an affordable price !!";
  }
  document.getElementById("heading").innerHTML = "Centigrade <br/> Labs!";
}

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": "#784ba0"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#784ba0"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": true
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 10,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#784ba0",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.4
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
          "distance": 180,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);