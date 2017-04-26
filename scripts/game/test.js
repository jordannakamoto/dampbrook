//using Pixi

var renderer = PIXI.autoDetectRenderer(1280,800,{transparent: true});

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

renderer.render(stage);