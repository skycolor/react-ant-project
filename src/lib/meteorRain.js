function meteorRain() {
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();

	//获取屏幕的宽度、高度
	var SCREEN_WIDTH = window.innerWidth;
	var SCREEN_HEIGHT = window.innerHeight;
	//相关变量
	var cursor, canvas, context;
	//粒子对象存储的数组
	var particles = [],
		particleNum = 320;
	//鼠标的位置
	var mouseX = 0,
		mouseY = 0;

	function init() {
		//获取canvas的element
		canvas = document.querySelector("canvas");
		context = canvas.getContext('2d');
		document.addEventListener('mousemove', documentMouseMoveHandler, false);
		//document.addEventListener('mousedown', documentMouseDownHandler, false);
		window.addEventListener('resize', windowResizeHandler, false);
		createCursor();
		windowResizeHandler();
		loop();
	}

	function createCursor(position) {
		var w = 300;
		var h = 300;
		if(!position) {
			var pos = {
				x: (SCREEN_WIDTH - w) * 0.5 + (Math.random() * w),
				y: (SCREEN_HEIGHT - h) * 0.5 + (Math.random() * h)
			}
			var m = new Cursor();
			m.position.x = pos.x;
			m.position.y = pos.y;
			cursor = m;
			createParticles(m.position);
		} else {
			var m = new Cursor();
			m.position.x = position.x;
			m.position.y = position.y;
			createParticles(m.position);
		}
	}

	function createParticles(pos) { //初始化粒子对象数组
		for(var i = 0; i < particleNum; i++) {
			var p = new Particle();
			p.position.x = pos.x;
			p.position.y = pos.y;
			p.shift.x = pos.x;
			p.shift.y = pos.y;
			particles.push(p);
		}
	}

	function documentMouseMoveHandler(event) {
		mouseX = event.clientX;
		mouseY = event.clientY;
	}

	function documentMouseDownHandler(event) {
		createCursor({
			x: mouseX,
			y: mouseY
		});
	}

	function windowResizeHandler() {
		canvas.width = SCREEN_WIDTH;
		canvas.height = SCREEN_HEIGHT;
		canvas.style.position = 'absolute';
		canvas.style.left = (window.innerWidth - SCREEN_WIDTH) * 0.5 + 'px';
		canvas.style.top = (window.innerHeight - SCREEN_HEIGHT) * 0.5 + 'px';
	}

	function loop() {
		//不清空画布，以显示出尾巴的特效
		context.fillStyle = 'rgba(0,0,0,0.2)';
		context.fillRect(0, 0, canvas.width, canvas.height);
		var particle;
		var i, j, ilen, jlen;
		cursor.position.x += (mouseX - cursor.position.x) * 0.1;
		cursor.position.y += (mouseY - cursor.position.y) * 0.1;
		for(i = 0, ilen = particles.length; i < ilen; i++) {
			particle = particles[i];
			particle.angle += particle.speed;
			particle.shift.x += (cursor.position.x - particle.shift.x) * particle.speed;
			particle.shift.y += (cursor.position.y - particle.shift.y) * particle.speed;
			particle.position.x = particle.shift.x + Math.sin(i + particle.angle) * (particle.orbit * particle.force);
			particle.position.y = particle.shift.y + Math.cos(i + particle.angle) * (particle.orbit * particle.force);
			particle.orbit += (cursor.orbit - particle.orbit) * 0.01;
			context.beginPath();
			context.fillStyle = "hsl(" + ((particle.position.x / canvas.width + particle.position.y / canvas.height) * 180) + ", 100%, 70%)";
			context.arc(particle.position.x, particle.position.y, particle.size / 2, 0, Math.PI * 2, true);
			context.fill();
		}
		requestAnimFrame(loop);
	}

	function distanceBetween(p1, p2) {
		var dx = p2.x - p1.x;
		var dy = p2.y - p1.y;
		return Math.sqrt(dx ^ 2 + dy ^ 2);
	}

	function Particle() {
		this.size = 2 + Math.random() * 4;
		this.position = {
			x: 0,
			y: 0
		};
		this.shift = {
			x: 0,
			y: 0
		};
		this.angle = 0;
		this.speed = 0.01 + Math.random() * 0.02;
		this.force = -(Math.random() * 10);
		this.orbit = 1;
	}

	function Cursor() {
		this.orbit = 100;
		this.position = {
			x: 0,
			y: 0
		};
	}

	init();
}

export default {
   meteorRain
}
