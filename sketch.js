const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left_ground;
var right_ground;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	gameEngine = Engine.create();
	gameWorld = gameEngine.world;

	ground = new Ground(400, 670, 800, 10)
	left_ground = new Ground(450, 624, 10, 100)
	right_ground = new Ground(700, 624, 10, 100)

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2

	}

	//Create the Bodies Here.

	ball = Bodies.circle(200, 200, 20, ball_options)
	World.add(gameWorld, ball);

	rectMode(CENTER)
	ellipseMode(RADIUS)



	//Engine.run(gameEngine);
}


function draw() {
	background(0);

	Engine.update(gameEngine);

	ellipse(ball.position.x, ball.position.y, 20);
	
	ground.show();
	left_ground.show();
	right_ground.show();
}

function keyPressed() {
	
		Matter.Body.applyForce(ball, ball.position, {x: 85, y: -85});		
}
