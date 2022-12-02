//Particles.js

var particles = Particles.init({
	selector: '.background',
  color: ['#003600', '#b28405'],
  connectParticles: true,
  responsive: [{
  	breakpoint: 500,
    options: {
    	maxParticles: 50,
      connectParticles: true
    }
  }]
});