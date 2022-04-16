noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console")
	model=ml5.poseNet(video,modelLoaded);
	model.on("pose",gotResults)
}

function draw() {
	game()
}

function modelLoaded()
{
	console.log("🌈⭐🌈⭐🌈 The Model Has Been Successfully Loaded 🌈⭐🌈⭐🌈")
}

function gotResults(results)
{
	if(results.length>0)
	{
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}