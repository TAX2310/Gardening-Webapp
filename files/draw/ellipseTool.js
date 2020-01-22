//allows users to create an ellipse on any size/colour by choosing one of the colours at the bottom, clicking the screen (to start drawing the ellipse) and dragging across the screen to manipulate the size

function ellipseTool()
{
    //sets object name
    this.name = "ellipseTool";
    //sets the linked png file as the icon for the tool
    this.icon = "assets/ellipse.png";
    
	//startMouseX/startMouseY used to check if an ellipse is currently being made
    //if they're both -1, then an ellipse isn't currently being drawn
    var startMouseX = -1;
	var startMouseY = -1;
    var drawing = false;

	this.draw = function()
    {

		//if statement only runs if mouse is being pressed
        //therefore the ellipse only begins to be drawn, if mouse is dragged
        if(mouseIsPressed)
        {
			//only runs if startMouseX/Y is -1 e.g. if nothing is being drawn at the moment (can't draw 2 circles at same time)
            if(startMouseX == -1 && startMouseY == -1)
            {
				//values changed from -1 to mouseX/mouseY
                startMouseX = mouseX;
				startMouseY = mouseY;
                
                //drawing set to true, as the ellipse is now being drawn
                drawing = true;
                
                //loads the drawn ellipse into the pixel array
                loadPixels();
			}
            
            //now that startMouseX/Y no longer equal -1, this runs
			else
            {
                //updates the display window with the data from pixel array e.g. the ellipse which was drawn (so that the ellipse stays there)
                updatePixels();
                
				ellipse((startMouseX + mouseX)/2, 
                        (startMouseY + mouseY)/2, 
                        startMouseX - mouseX, 
                        startMouseY - mouseY);
			}
        }
        
        //allows user to draw multiple circles
        //if drawing is true (if an ellipse is currently being drawn) then startMouseX and startMouseY is once again set to -1 (same as initial value) so the function can restart and if statement can be run again
        else if(drawing)
        {
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
        
    };
};