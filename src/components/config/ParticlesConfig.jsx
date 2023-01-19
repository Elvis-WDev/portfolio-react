

export const ParticlesConfig = {
    background: {
        color: "#1A2027"
    },
    fullScreen: {
        enable: false,
    },
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 555
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 4
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 2,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 10,
                "size_min": 0,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#5ccfee",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 0.2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 6392.095897221408,
                "rotateY": 5839.692548078818
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "grab"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.37237616468740653
                }
            },
            "bubble": {
                "distance": 1030.969030969031,
                "size": 235.76423576423576,
                "duration": 5.594405594405595,
                "opacity": 0.25574425574425574,
                "speed": 3
            },
            "repulse": {
                "distance": 391.6083916083916,
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
    "retina_detect": false
}
