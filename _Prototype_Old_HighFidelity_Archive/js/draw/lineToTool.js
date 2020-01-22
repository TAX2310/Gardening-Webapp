function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    
    
    //variables initialised
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    
    //If Start position of mouse is -1, get current mouse position of Y and store them also, variables are initialised as booleans and is also initialialised as true, once StartMouseX = 1, it becomes MouseX and then the drawing starts to become true
	this.draw = function(){

		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                
			//Loads the pixel data for the display window into the pixel array.
			stroke(0, 0, 0);
				loadPixels();
			}

			else{
            //continously updates the drawing so the line shows up without continous loop
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        
        //Reset drawing position of the mouse
        //allows the position of MouseX and MouseY to be -1 also, resets drawing enabled boolean.
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
