//using Pixi

var renderer = PIXI.autoDetectRenderer(1280,800,{transparent: true});

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader //loads in assets
	.add("firstunit","graphics/sprites/units/firstunit.png")
	.add("goblin","graphics/sprites/enemy/goblin.png")
	.load(setup);

var firstunit;

function setup() {
	stage.interactive = true;

	var rect = new PIXI.Rectangle(0,0,32,32);
	var texture =  PIXI.loader.resources["firstunit"].texture;
	var texture2 =  PIXI.loader.resources["goblin"].texture;
	texture.frame = rect;
	texture2.frame = rect;

	firstunit = new PIXI.Sprite(texture);
	goblin = new PIXI.Sprite(texture2);

	firstunit.anchor.set(0.5,0.5);
	firstunit.x = renderer.width / 2 + 64;
	firstunit.y = renderer.height / 2;

	goblin.anchor.set(0.5,0.5);
	goblin.x = renderer.width / 2 + 32;
	goblin.y = renderer.height / 2 + 64;
	

	stage.addChild(firstunit);
	stage.addChild(goblin);

	renderer.render(stage);
}

