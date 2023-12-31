var canvas=new fabric.Canvas("myCanvas");
block_img_width=30;
block_img_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);

    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        var block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_img_object);
        
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true && keyPressed=='80' ){
        console.log("presiona shift+p");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("CurrentWidth").innerHTML=block_img_width;
        document.getElementById("CurrentHeight").innerHTML=block_img_height;
    }
    if(e.shiftKey==true && keyPressed=='77' ){
        console.log("presiona shift+m");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("CurrentWidth").innerHTML=block_img_width;
        document.getElementById("CurrentHeight").innerHTML=block_img_height;
        
    }
    if(keyPressed=='38'){
        Up();
        console.log('arriba');
    }
    
    if(keyPressed=='40'){
        down();
        console.log('abajo');
    }

    if(keyPressed=='37'){
        left();
        console.log('izquierda');
    }

    if(keyPressed=='39'){
        right();
        console.log('derecha');
    }


//minecraft blocks.


    if(keyPressed=='89'){
        new_image('yellow_wall.png');
        console.log('y');
    }

    if(keyPressed=='67'){
        new_image('cloud.jpg');
        console.log('c');
    }

    if(keyPressed=='68'){
        new_image('dark_green.png');
        console.log('d');
    }

    if(keyPressed=='71'){
        new_image('ground.png');
        console.log('g');
    }

    if(keyPressed=='76'){
        new_image('light_green.png');
        console.log('l');
    }

    if(keyPressed=='82'){
        new_image('roof.jpg');
        console.log('r');
    }

    if(keyPressed=='84'){
        new_image('trunk.jpg');
        console.log('t');
    }

    if(keyPressed=='85'){
        new_image('unique.png');
        console.log('u');
    }

    if(keyPressed=='87'){
        new_image('wall.jpg');
        console.log('w');
    }

    if(keyPressed=='65'){
        new_image('amogus1.png');
        console.log('a');
    }

    if(keyPressed=='49'){
        new_image('calabaza.jpeg');
        console.log('1');
    }

}
function Up(){
    if(player_y>=0){
        player_y=player_y-block_img_height;
        canvas.remove(player_object);
        player_update();
        console.log(player_x,player_y);
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_img_height;
        canvas.remove(player_object);
        player_update();
        console.log(player_x,player_y);
    }
}

function right(){
    if(player_x<=850){
        player_x=player_x+block_img_width;
        canvas.remove(player_object);
        player_update();
        console.log(player_x,player_y);
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_img_width;
        canvas.remove(player_object);
        player_update();
        console.log(player_x,player_y);
    }
}
