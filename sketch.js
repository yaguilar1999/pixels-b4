var userUpload;

function preload(){
	userUpload = loadImage("download.jpeg");
}

function setup(){
	createCanvas(userUpload.width, userUpload.height);
}

function draw(){
	image(userUpload, 0, 0);
	loadPixels();
	
	for (var row = 0; row < height; row++){
		for (var col = 0; col < width; col++){
			var startingIndex = (col + row * width) * 4;
			
			var r = pixels[startingIndex];
			var g = pixels[startingIndex + 1];
			var b = pixels[startingIndex + 2];
			var a = pixels[startingIndex + 3];
			
			if (keyIsPressed){
				if (key == "1"){
					gray_filter(startingIndex, g, a);
				}
				if (key == "2"){
				what_why(startingIndex, g, a);
				}
				if (key == "3"){
					s_nothing(startingIndex, r, g, b, a);
				}
			}
		}
	}
	updatePixels();
}

function gray_filter(startingIndex, g, a){
	pixels[startingIndex] = g; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = g; //blue1
	pixels[startingIndex + 3] = a; //alpha
}

function what_why(startingIndex, g, a){
	pixels[startingIndex] = 0; //red
	pixels[startingIndex + 1] = g; //green
	pixels[startingIndex + 2] = 0; //blue
	pixels[startingIndex + 3] = a; //alpha
}

function s_nothing(startingIndex, r, g, b, a){
	pixels[startingIndex] = r; //red
	pixels[startingIndex + 1] = b; //green
	pixels[startingIndex + 2] = g; //blue
	pixels[startingIndex + 3] = a; //alpha
}