//Particles.js

var particles = Particles.init({
	selector: '.background',
  color: ['#F5FFFA', '#B22222'],
  connectParticles: true,
  responsive: [{
  	breakpoint: 500,
    options: {
    	maxParticles: 50,
      connectParticles: true
    }
  }]
});