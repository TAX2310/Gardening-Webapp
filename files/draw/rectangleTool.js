//allows users to create a rectangle on any size/colour by choosing one of the colours at the bottom, clicking the screen (to start drawing the ellipse) and dragging across the screen to increase/decrease how big it is

function rectangleTool()
{
	this.icon = "assets/rectangle.png";
	this.name = "rectangleTool";

    
    
    //variables initialised
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;
    
    
    //If Start position of mouse is -1, get current mouse position of Y and store them also, variables are initialised as booleans and is also initialialised as true, once StartMouseX = 1, it becomes MouseX and then the drawing starts to become true
	this.draw = function()
    {

		if(mouseIsPressed)
        {
			if(startMouseX == -1)
            {
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                
            //Loads the pixel data for the display window into the pixel array.
				loadPixels();
			}

			else
            {
            //continously updates the drawing so the line shows up without continous loop
                updatePixels();
				rect((startMouseX + mouseX)/2, 
                     (startMouseY + mouseY)/2, 
                     startMouseX - mouseX, 
                     startMouseY - mouseY);
                
			}

		}
        
        //Reset drawing position of the mouse
        //allows the position of MouseX and MouseY to be -1 also, resets drawing enabled boolean.
		else if(drawing)
        {
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
