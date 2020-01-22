function HelperFunctions() {
    //Jquery click events. Notice that there is no this. at the
    //start we don't need to do that here because the event will
    //be added to the button and doesn't 'belong' to the object
    //event handler for the clear button event. Clears the screen
    $("#clearButton").on("click", function() {
        background(255, 255, 255);
        scPlant0=scPlant1=scPlant2=scPlant3=scPlant4=scPlant5=scPlant6=scPlant7=scPlant8=scPlant9 = 0;
        //call loadPixels to update the drawing state
        //this is needed for the mirror tool
        loadPixels();
    });
    //event handler for the save image button. saves the canvsa to the
    //local file system. 
    $("#saveImageButton").on("click", function() {
        saveCanvas();
    });
    $("#drawMode").on("click", function() {
        toolbox.selectedTool = toolbox.tools[0];
        console.log(toolbox.tools);
        console.log(toolbox.selectedTool);
    });
    $("#eraserMode").on("click", function() {
        toolbox.selectedTool = new eraserTool();
        console.log(toolbox.selectedTool);
    });
    //text for help button
    let brush = "Paintbrush Tool: Advised that you draw slowly, as quick swipes result in less accurate drawing.";
    let eraser = "Eraser Tool: Reselect colour (choose a different colour, then reselect original colour) after use.";
    let rectEll = "Rectangle/Ellipse Tool: Click and drag to manipulate shape/size of rectangle/ellipse.";
    let bGC = "Background Colour Tool: Select a colour then click anywhere on the canvas to change background colour.";
    let stamp = "Stamp Tool: Click anywhere on canvas to draw a star stamp.";
    let reset = "To clear this help message, click the 'Clear' button";
    //event handler for the help button
    //provides helpful advice for users who may not know how to properly use the drawing app
    $("#helpButton").on("click", function() {
        strokeWeight(0.5)
        text(brush, 850, 20);
        text(eraser, 850, 40);
        text(rectEll, 850, 60);
        text(bGC, 850, 80);
        text(stamp, 850, 100);
        stroke(255, 0, 0);
        text(reset, 850, 130);
        strokeWeight(1);
        stroke(0);
    });
}