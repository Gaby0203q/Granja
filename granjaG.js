(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"granjaG_atlas_1", frames: [[0,1945,1185,78],[0,885,1678,226],[738,702,422,96],[1337,1696,422,96],[0,1726,422,96],[738,0,632,700],[1372,622,240,210],[552,1113,626,454],[1680,622,360,360],[1682,1346,348,348],[0,1113,550,611],[0,0,736,883],[1028,1615,307,320],[1372,0,552,620],[552,1569,474,374],[1682,984,360,360],[1180,1113,500,500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4810,318);


(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4205,278);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5779,779);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7074,953);


(lib.CachedBmp_5 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._02fdfbbeac444d0bb4c4638a594eff8c = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._20537bbf074b46beb571e5db462fb351 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._5c9ce313653f44da8119253283e52326 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._6baa4c01fa15412ca8633c540d27bb50 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.a77d89ea131c400d954aa92e4b5268b9 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cb697def1b6941c6b1d77086b1f158dc = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.descarga17 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.descarga18 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.descarga19 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.descarga20 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.fe76cbc10b5c428cbdb92ec6750258c7 = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.WandtattooNICIEselstürmischschwarz = function() {
	this.initialize(ss["granjaG_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vaca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("COW2");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.descarga18();
	this.instance.setTransform(0,0,0.6743,0.5253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.9193,scaleY:0.7311,x:-38,y:-33},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-33,282.2,234);


(lib.oveja = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("animals057");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.cb697def1b6941c6b1d77086b1f158dc();
	this.instance.setTransform(-13,-12,0.3777,0.3193);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.4359,scaleY:0.3716,x:-29,y:-28},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-28,239.8,227.1);


(lib.Interpolación8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-296.2,-19.55,0.1232,0.1232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.2,-19.5,592.5,39.1);


(lib.Interpolación7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-296.25,-19.55,0.1409,0.1409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.2,-19.5,592.5,39.1);


(lib.Interpolación6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-151.85,-20.4,0.0526,0.0526);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.8,-20.4,303.8,41);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-151.8,-20.4,0.0429,0.0429);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.8,-20.4,303.8,40.9);


(lib.gallina = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("Gallo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib._02fdfbbeac444d0bb4c4638a594eff8c();
	this.instance.setTransform(0,0,0.2724,0.2314);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.3677,scaleY:0.3228,x:-30,y:-32},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-32,232.4,226);


(lib.cerdo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("cerdo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.descarga19();
	this.instance.setTransform(0,0,0.3698,0.3163);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.4869,scaleY:0.4187,x:-32,y:-31},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-31,268.8,259.6);


(lib.caballo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("caballo");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.descarga17();
	this.instance.setTransform(-94.7,-82.5,0.2574,0.1869);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.3226,scaleY:0.2381,x:-119,y:-105},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119,-105,237.5,210.3);


(lib.burro_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("burro");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Capa_1
	this.instance = new lib.WandtattooNICIEselstürmischschwarz();
	this.instance.setTransform(0,0,0.3522,0.3765);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.499,scaleY:0.4832,x:-37,y:-27},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-27,249.5,241.6);


(lib.btnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fe76cbc10b5c428cbdb92ec6750258c7();
	this.instance.setTransform(-55.95,-50.05,0.3109,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.3853,scaleY:0.3446,x:-69,y:-62},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-62,138.7,124.1);


(lib.btnSiguiente1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-94.75,-18.8,0.3465,0.3465);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-94.75,-18.8,0.3465,0.3465);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-94.75,-18.8,0.3465,0.3465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.7,-18.8,146.2,33.3);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._6baa4c01fa15412ca8633c540d27bb50();
	this.instance.setTransform(-56,-52,0.3112,0.2891);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.389,scaleY:0.3668,x:-70,y:-66},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-66,140.1,132.1);


(lib.btnMenos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib._20537bbf074b46beb571e5db462fb351();
	this.instance.setTransform(-46.05,-42,0.3837,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.5004,x:-60},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-42,120.1,84);


(lib.btnMas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.a77d89ea131c400d954aa92e4b5268b9();
	this.instance.setTransform(-72.05,-68,0.4141,0.3908);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.621,scaleY:0.5744,x:-108,y:-100},0).wait(1).to({scaleX:0.4141,scaleY:0.3908,x:-72.05,y:-68},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-100,216.1,199.9);


(lib.titulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-151.85,-20.4,0.1811,0.1811);

	this.instance_1 = new lib.Interpolación5("synched",0);
	this.instance_1.setTransform(0,0,1.2629,4.2171);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolación6("synched",0);
	this.instance_2.setTransform(0,0,1.4998,3.445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true,scaleX:1.4998,scaleY:3.445},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.7,-86,455.6,172.6);


(lib.subtitulo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-296.25,-19.6,0.5,0.5);

	this.instance_1 = new lib.Interpolación7("synched",0);
	this.instance_1.setTransform(0,0,1.1686,3.5485);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpolación8("synched",0);
	this.instance_2.setTransform(0,6,1.1281,4.0587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true,scaleX:1.1281,scaleY:4.0587,y:6},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346.1,-73.3,692.3,159);


(lib.cpEscenario2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var sonido = new createjs.Sound.play("audiomp3", {loop: -1});
		
		sonido.volume = 0.5;
		
		// Función para detener sonido
		function detenerSonido() {
		    sonido.stop();
		    createjs.Sound.stop();
		}
		
		// Botón de detener sonido
		this.btnStop.addEventListener("click", detenerSonido);
		
		// Función para iniciar sonido
		function iniciarSonido() {
			sonido.play();
		}
		
		// Botón de iniciar sonido
		this.btnPlay.addEventListener("click", iniciarSonido);
		
		// Botón para subir volumen
		this.btnMas.addEventListener("click", function () {
		    if (sonido.volume < 1) {
		        sonido.volume += 0.1;
		    }
		});
		
		// Botón para bajar volumen
		this.btnMenos.addEventListener("click", function () {
		    if (sonido.volume > 0) {
		        sonido.volume -= 0.1;
		    }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnMenos
	this.btnMenos = new lib.btnMenos();
	this.btnMenos.name = "btnMenos";
	this.btnMenos.setTransform(394.05,582.15);
	new cjs.ButtonHelper(this.btnMenos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMenos).wait(1));

	// btnMas
	this.btnMas = new lib.btnMas();
	this.btnMas.name = "btnMas";
	this.btnMas.setTransform(292.55,575);
	new cjs.ButtonHelper(this.btnMas, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMas).wait(1));

	// btnStop
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(202.15,574.1);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStop).wait(1));

	// btnPlay
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(100.6,572.1);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(1));

	// Titulo
	this.instance = new lib.subtitulo();
	this.instance.setTransform(452.85,69.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// vaca
	this.instance_1 = new lib.vaca();
	this.instance_1.setTransform(456.45,422.9,1,1,0,0,0,103.5,84);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// caballo
	this.instance_2 = new lib.caballo_1();
	this.instance_2.setTransform(169.7,424.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// gallina
	this.instance_3 = new lib.gallina();
	this.instance_3.setTransform(749.1,216,1,1,0,0,0,86.1,81);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// oveja
	this.instance_4 = new lib.oveja();
	this.instance_4.setTransform(452.1,220.5,1,1,0,0,0,91.1,85.5);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// cerdo
	this.instance_5 = new lib.cerdo_1();
	this.instance_5.setTransform(750,422,1,1,0,0,0,102,98);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// burro
	this.instance_6 = new lib.burro_1();
	this.instance_6.setTransform(82,128.85);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2);

	this.instance_7 = new lib.descarga20();
	this.instance_7.setTransform(0,-25,1.9285,1.835);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("EhF7Ay8MgBUhl3MCNLAAAMABUBl3g");
	this.shape.setTransform(456.025,335.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario2, new cjs.Rectangle(0,-25,914.1,699.9), null);


(lib.cpEscenario1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var sonido = new createjs.Sound.play("audiomp3", {loop: -1});
		
		sonido.volume = 0.5;
		
		// Función para detener sonido
		function detenerSonido() {
		    sonido.stop();
		    createjs.Sound.stop();
		}
		
		// Botón de detener sonido
		this.btnStop.addEventListener("click", detenerSonido);
		this.btnSiguiente1.addEventListener("click", detenerSonido);
		
		// Función para iniciar sonido
		function iniciarSonido() {
			sonido.play();
		}
		
		// Botón de iniciar sonido
		this.btnPlay.addEventListener("click", iniciarSonido);
		
		// Botón para subir volumen
		this.btnMas.addEventListener("click", function () {
		    if (sonido.volume < 1) {
		        sonido.volume += 0.1;
		    }
		});
		
		// Botón para bajar volumen
		this.btnMenos.addEventListener("click", function () {
		    if (sonido.volume > 0) {
		        sonido.volume -= 0.1;
		    }
		});
		this.btnSiguiente1.on("click",irA2.bind(this));
		
		function irA2(e){
			this.parent.cambiarEscenario(new lib.cpEscenario2());	
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btnMas
	this.btnMas = new lib.btnMas();
	this.btnMas.name = "btnMas";
	this.btnMas.setTransform(377.05,556);
	new cjs.ButtonHelper(this.btnMas, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMas).wait(1));

	// btnMenos
	this.btnMenos = new lib.btnMenos();
	this.btnMenos.name = "btnMenos";
	this.btnMenos.setTransform(281.05,562);
	new cjs.ButtonHelper(this.btnMenos, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnMenos).wait(1));

	// btnStop
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(178.95,554.05);
	new cjs.ButtonHelper(this.btnStop, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnStop).wait(1));

	// btnPlay
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(81.1,552.2,1,0.8457,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(1));

	// Siguiente
	this.btnSiguiente1 = new lib.btnSiguiente1();
	this.btnSiguiente1.name = "btnSiguiente1";
	this.btnSiguiente1.setTransform(779.15,558.7,1.4428,1,0,0,0,-40.6,-2.9);
	new cjs.ButtonHelper(this.btnSiguiente1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnSiguiente1).wait(1));

	// Titulo
	this.instance = new lib.titulo();
	this.instance.setTransform(535.85,104.05,1.2238,2.7604,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.instance_1 = new lib._5c9ce313653f44da8119253283e52326();
	this.instance_1.setTransform(-23,-5,1.5691,1.4203);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("EhK/AyAMAAAhj/MCV/AAAMAAABj/g");
	this.shape.setTransform(479,320.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cpEscenario1, new cjs.Rectangle(-23,-5,982.3,660.9), null);


// stage content:
(lib.granjaG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var escenario = new lib.cpEscenario1();
		this.addChild(escenario);
		
		this.cambiarEscenario = function (nuevoEscenario){
			this.addChild(nuevoEscenario);
			this.removeChild(escenario);
			escenario=nuevoEscenario;
			
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '4FFC2E210D1C92499F631AD529AB9D68',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_9.png?1742770422651", id:"CachedBmp_9"},
		{src:"images/CachedBmp_8.png?1742770422651", id:"CachedBmp_8"},
		{src:"images/CachedBmp_7.png?1742770422651", id:"CachedBmp_7"},
		{src:"images/CachedBmp_6.png?1742770422651", id:"CachedBmp_6"},
		{src:"images/granjaG_atlas_1.png?1742770422611", id:"granjaG_atlas_1"},
		{src:"sounds/animals057.mp3?1742770422651", id:"animals057"},
		{src:"sounds/burro.mp3?1742770422651", id:"burro"},
		{src:"sounds/caballo.mp3?1742770422651", id:"caballo"},
		{src:"sounds/cerdo.mp3?1742770422651", id:"cerdo"},
		{src:"sounds/COW2.mp3?1742770422651", id:"COW2"},
		{src:"sounds/Gallo.mp3?1742770422651", id:"Gallo"},
		{src:"sounds/audiomp3.mp3?1742770422651", id:"audiomp3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4FFC2E210D1C92499F631AD529AB9D68'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;