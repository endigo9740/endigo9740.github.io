// Based On: https://medium.com/@matswainson/getting-started-with-canvas-in-html5-ef1917cc496

var Particles = (function (document, parentElem) {
    'use strict';

    var c = document.getElementById('particles');
    var ctx = c.getContext('2d'),
        fps = 24,
        position = {
            x: (parentElem.innerWidth / 1.9),
            y: (parentElem.innerHeight / 1.85)
        },
        particles = [];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Draw() {
        var particle = {
            color: 'rgba(34,34,34,1)',
            size: 75
        };
        particle.xSpeed = getRandomInt(-10, 10);
        particle.ySpeed = getRandomInt(-10, 10);
        particle.x = position.x - (particle.size / 2);
        particle.y = position.y - (particle.size / 2);
        particles.push(particle);
        ctx.clearRect(0, 0, parentElem.innerWidth, parentElem.innerHeight);
        if (particles.length === 20) {
            particles.splice(60);
        }
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            if ((particle.x < -particle.size) || (particle.x > parentElem.innerWidth + particle.size) || (particle.y < -particle.size) || (particle.y > parentElem.innerHeight + particle.size)) {
                particles.splice(particles.indexOf(particles[i]), 1);
            } else {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI, false);
                ctx.fillStyle = particle.color;
                ctx.fill();
                ctx.shadowBlur = 5;
                ctx.shadowColor = particle.color;
                particle.x = particle.x + particle.xSpeed;
                particle.y = particle.y + particle.ySpeed;
                particle.size = particle.size * 0.9;
            }
        }
        setTimeout(requestFrame, 1000 / fps);
    }

    function requestFrame() {
        requestAnimationFrame(Draw);
    }

    function setCanvasSize() {
        c.height = parentElem.innerHeight;
        c.width = parentElem.innerWidth;
    }

    function setParticleOrigin() {
        position.x = (parentElem.innerWidth / 1.9);
        position.y = (parentElem.innerHeight / 1.85);
    }

    function onWindowResize() {
        setCanvasSize();
        setParticleOrigin();
    }

    function init() {
        window.addEventListener('resize', onWindowResize);
        setCanvasSize();
        requestFrame();
    }

    return { init: init };

})(document, window);

// Init
Particles.init();