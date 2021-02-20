/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

    
    treePos_x = width/ 2;
    treePos_y= floorPos_y -20;
    
    cloud = { x_pos: 350, y_pos : 70, size : 0.8};
    
    collectable = {x_pos: 400, y_pos: 420, size: 0.6};
    
    mountain = {x_pos: 0, y_pos: floorPos_y, size: 0.9};
    
    canyon = {x_pos: 50, width : 80};
    
    
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	//mountain
    fill(165, 170, 236);
    noStroke();
    beginShape();
    vertex(mountain.x_pos, mountain.y_pos);
    vertex(mountain.x_pos + 284 * mountain.size, mountain.y_pos - 90 * mountain.size);
    vertex(mountain.x_pos +  364 * mountain.size, mountain.y_pos - 140 * mountain.size);
    vertex(mountain.x_pos +  454 * mountain.size, mountain.y_pos - 180 * mountain.size);
    vertex( mountain.x_pos+ 474 * mountain.size, mountain.y_pos - 160 * mountain.size);
    vertex(mountain.x_pos+ 504 * mountain.size, mountain.y_pos - 140 * mountain.size);
    vertex(mountain.x_pos + 534 * mountain.size, mountain.y_pos - 100 * mountain.size);
    vertex(mountain.x_pos+ 554 * mountain.size, mountain.y_pos - 80 * mountain.size);
    vertex(mountain.x_pos+ 594 * mountain.size, mountain.y_pos);
    endShape(CLOSE);
    
    fill(129, 134, 198);
    beginShape();
    vertex(mountain.x_pos, mountain.y_pos);
    vertex(mountain.x_pos + 284 * mountain.size, mountain.y_pos - 90 * mountain.size);
    vertex(mountain.x_pos +  364 * mountain.size, mountain.y_pos - 140 * mountain.size);
    vertex(mountain.x_pos +  454 * mountain.size, mountain.y_pos - 180 * mountain.size);
    vertex( mountain.x_pos +  404 * mountain.size, mountain.y_pos - 70 * mountain.size );
    vertex( mountain.x_pos +  414 * mountain.size, mountain.y_pos - 50 * mountain.size);
    vertex(mountain.x_pos +  434 * mountain.size, mountain.y_pos - 60 * mountain.size);
    vertex( mountain.x_pos +  474 * mountain.size, mountain.y_pos - 90 * mountain.size);
    vertex(mountain.x_pos +  484 * mountain.size, mountain.y_pos - 90 * mountain.size);
    vertex(mountain.x_pos +  454 * mountain.size, mountain.y_pos - 30 * mountain.size );
    vertex(mountain.x_pos +  414 * mountain.size, mountain.y_pos);
    endShape(CLOSE);
    
    noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green 
    
    
     //cloud
    
     
    noStroke();
    fill(245, 237, 241);
    rect(cloud.x_pos, cloud.y_pos,
         200 * cloud.size, 15 * cloud.size, 
         30 *cloud.size);
    ellipse(cloud.x_pos + 15 *cloud.size, cloud.y_pos+5 * cloud.size, 
            20* cloud.size, 20*cloud.size);
    ellipse(cloud.x_pos + 25 *cloud.size, cloud.y_pos, 
            30 * cloud.size, 30 *cloud.size);
    ellipse(cloud.x_pos + 45 *cloud.size, cloud.y_pos - 10 *cloud.size, 
            40 * cloud.size, 40 *cloud.size);
    ellipse(cloud.x_pos + 70 *cloud.size, cloud.y_pos - 10 *cloud.size, 25 * cloud.size,25 * cloud.size);
    ellipse(cloud.x_pos + 75 *cloud.size, cloud.y_pos,
            20 * cloud.size,20*cloud.size);
    ellipse(cloud.x_pos + 115 *cloud.size, cloud.y_pos - 25 *cloud.size, 
            80 *cloud.size,80 *cloud.size);
    ellipse(cloud.x_pos + 160 *cloud.size, cloud.y_pos - 15 *cloud.size, 
            40 *cloud.size, 40 *cloud.size);
    ellipse(cloud.x_pos + 185 *cloud.size, cloud.y_pos + 5 *cloud.size,
            20 *cloud.size,20 *cloud.size);
    ellipse(cloud.x_pos + 180 *cloud.size, cloud.y_pos - 7 *cloud.size, 
            20 *cloud.size,20 *cloud.size);
    
     // tree
            
    fill(109, 161, 59);
    triangle( treePos_x, treePos_y, 70 + treePos_x, treePos_y, 35 + treePos_x, treePos_y - 50);
    //fill( 32, 48, 3);
    fill(60, 95, 14)
    triangle( treePos_x, treePos_y, 
             15 + treePos_x, treePos_y,
              35 + treePos_x, treePos_y - 50 );
     fill(100, 80, 43);
     rect(treePos_x+ 30, treePos_y, 10, 20);       
    fill(109, 161, 59);
    
    triangle(treePos_x, treePos_y - 10, 70 + treePos_x, treePos_y - 10, 35 + treePos_x, treePos_y - 60 );
    fill(60, 95, 14);
            
    triangle( treePos_x, treePos_y - 10, 
             15 + treePos_x,treePos_y - 10 ,
               35 + treePos_x, treePos_y - 60 );
    

    fill(109,161,59);
    
    triangle( treePos_x, treePos_y - 20, 70 + treePos_x, treePos_y - 20, 35 + treePos_x, treePos_y - 70 );
    fill(60, 95, 14);
    triangle( treePos_x, treePos_y - 20, 
             15 + treePos_x, treePos_y - 20,
              35 + treePos_x, treePos_y - 70 );
            
    
    //collectable items( collectable)
    fill(225,138,138);
    noStroke();
    ellipse( collectable.x_pos, collectable.y_pos, 30 * collectable.size, 30 * collectable.size);
    ellipse( 10 * collectable.size + collectable.x_pos, collectable.y_pos, 30 * collectable.size, 30 * collectable.size);
    noFill();
    stroke(0,132,0);
    arc(15 * collectable.size + collectable.x_pos,  collectable.y_pos - 30 * collectable.size, 30 * collectable.size, 40 * collectable.size, PI / 1.5, PI / 0.8);
    
    line( collectable.x_pos,  collectable.y_pos - 29 * collectable.size  , 7 * collectable.size + collectable.x_pos , collectable.y_pos - 35 * collectable.size);
    
    line(collectable.x_pos , collectable.y_pos - 29 * collectable.size,collectable.x_pos - 5 * collectable.size, collectable.y_pos - 35 * collectable.size);
    
    fill( 0,132, 0);
    curve(collectable.x_pos - 7 * collectable.size ,collectable.y_pos +38 * collectable.size, 7*collectable.size + collectable.x_pos,collectable.y_pos - 35 *collectable.size,21 * collectable.size + collectable.x_pos,collectable.y_pos - 43 * collectable.size,59 * collectable.size + collectable.x_pos,collectable.y_pos - 50 * collectable.size);
    
    curve(collectable.x_pos - 20 * collectable.size, collectable.y_pos - 60 * collectable.size, 7 * collectable.size + collectable.x_pos, collectable.y_pos - 35 * collectable.size ,21 * collectable.size + collectable.x_pos, collectable.y_pos - 43 * collectable.size, 28 * collectable.size +collectable.x_pos , collectable.y_pos - 50 * collectable.size);
    
    curve(collectable.x_pos - 7 * collectable.size, collectable.y_pos + 38 * collectable.size, collectable.x_pos - 5 * collectable.size, collectable.y_pos - 35 * collectable.size, collectable.x_pos - 17 * collectable.size, collectable.y_pos - 43 * collectable.size, collectable.x_pos - 57 * collectable.size, collectable.y_pos - 40 * collectable.size);
    
    curve(collectable.x_pos - 7 * collectable.size, collectable.y_pos - 100 * collectable.size, collectable.x_pos -5 * collectable.size, collectable.y_pos - 35 * collectable.size, collectable.x_pos - 17 * collectable.size,collectable.y_pos - 43 * collectable.size , collectable.x_pos - 13 * collectable.size, collectable.y_pos - 55 * collectable.size);
    
    
    
    //canyon
    
    noStroke();
    fill(100, 155, 255);
    rect(canyon.x_pos, floorPos_y ,canyon.width, 100 );
    fill(255, 255, 0);
    triangle(canyon.x_pos, floorPos_y + 100, canyon.x_pos + canyon.width / 3, floorPos_y + 100, canyon.x_pos + canyon.width / 6, floorPos_y + 80);
    
     triangle(canyon.x_pos + canyon.width / 2, floorPos_y + 100, canyon.x_pos + canyon.width / 3 + canyon.width / 2, floorPos_y + 100, canyon.x_pos + canyon.width / 6 + canyon.width / 2, floorPos_y + 80);
    
    
    //gamecharacter
    
     fill(255, 170, 170);
    stroke(0);
    strokeWeight(0.5);
    //leg
    ellipse(gameChar_x + 12, gameChar_y -15, 10, 30);
    ellipse(gameChar_x - 12, gameChar_y - 15, 10, 30);

    //ear
    ellipse(gameChar_x - 12, gameChar_y -65 , 10, 20);
    ellipse(gameChar_x + 12, gameChar_y - 65, 10, 20);
    //body
    ellipse(gameChar_x, gameChar_y - 35, 47, 60);
    //head
    ellipse(gameChar_x , gameChar_y - 50, 47, 47);
    //eyes
    fill(255);
    ellipse(gameChar_x - 10, gameChar_y - 55, 10,10);
    ellipse(gameChar_x + 10, gameChar_y - 55, 10, 10);
    //eyeballs
    fill(0);
    ellipse(gameChar_x - 9, gameChar_y - 54, 4, 4);
    ellipse(gameChar_x + 9, gameChar_y - 54, 4, 4);
    //foot
    ellipse(gameChar_x -12, gameChar_y , 10,5);
    ellipse(gameChar_x + 12, gameChar_y, 10, 5);
    // nose
    noFill();
    ellipse(gameChar_x, gameChar_y - 40, 17, 12);
    fill(0);
    ellipse(gameChar_x - 4, gameChar_y - 40, 4, 4);
    ellipse(gameChar_x +4, gameChar_y -40, 4, 4);  

}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;


}




