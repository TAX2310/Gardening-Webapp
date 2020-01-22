//allows users to erase what was previously drawn onto the canvas
function eraserTool() {
    //sets the name and icon for the object
    this.name = "eraserTool";
    this.icon = "assets/eraser.png";
    //previousMouseX/Y set a value of -1
    var previousMouseX = -1;
    var previousMouseY = -1;
    this.draw = function() {
        //if statement only executed if the mouse is being pressed
        if (mouseIsPressed) {
            //if the background colour is white, the eraser colour is also set to white so that it doesn't erase the background colour
            if (backgroundColour == "white") {
                fill(255);
                noStroke();
            }
            //if the background colour isn't white, the background colour is set to the actual selected colour
            //at that point, the variable backgroundcolour is repeatedly looped through the this.colours array (which holds all the colour names) and if it matches, that colour is used for the eraser
            else if (backgroundColour != "white") {
                backgroundColour = this.selectedColour;
                for (var i = 0; i < this.colours; i++) {
                    if (backgroundColour == this.colours[i]) {
                        fill(this.colours[i]);
                    }
                }
            }
            //if statement only executes if previousMouseX/Y
            if (previousMouseX == -1 && previousMouseY == -1) {
                //initial values of previousMouseX/Y changed from -1 to mouseX/Y
                //this makes it so that the eraser now follows the x/y position of our mouse
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            //only runs if previousMouseX/Y isn't -1
            //so after they're equal to mouseX/Y
            else {
                ellipse(previousMouseX, previousMouseY, 50, 50);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        //runs if the mouse isn't being pressed
        //therefore once the user stops erasing and lets go of the mouse, previousMouseX and Y is set back to -1, so that the second if statement can be met/executed again (allows repeated use of tool)
        else {
            previousMouseX = -1;
            previousMouseY = -1;
        }
        //the current pixels on the display is saved to the pixel array
        //it saves whatever was erased, so that it doesn't just reappear
        loadPixels();
    };
}