let cols, rows;
let scl = 20;
let zoom = 1;
let capture;
let toggleCam = true;
var scPlant0 = 0;
var scPlant1 = 0;
var scPlant2, scPlant3, scPlant4, scPlant5, scPlant6, scPlant7, scPlant8, scPlant9 = 0;
//global variables that will store the toolbox colour palette
//and the helper functions
var toolbox = null;
// var colourP = null;
var helpers = null;
// var sprayCan = null;
var backgroundColour = "white";
//spray can object literal
let moveOffSetW = 0;
let moveOffSetH = 0;

function preload() {
    img_lawnDemo = loadImage("assets/lawnDemo.jpg");
    plants0 = loadModel('assets/plants0.obj');
    plants1 = loadModel('assets/plants1.obj');
    plants2 = loadModel('assets/plants2.obj');
    plants3 = loadModel('assets/plants3.obj');
    plants4 = loadModel('assets/plants4.obj');
    plants5 = loadModel('assets/plants6.obj');
    plants6 = loadModel('assets/plants8.obj');
    plants7 = loadModel('assets/plants9.obj');
    plants8 = loadModel('assets/plants10.obj');
    plants9 = loadModel('assets/plants11.obj');
    plants0Text = loadImage('assets/plants0Text.jpg');
    plants1Text = loadImage('assets/plants1Text.jpg');
    plants6Text = loadImage('assets/plants8Text.jpg');
    plants7Text = loadImage('assets/plants9Text.jpg');
}

function setup() {
    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight(), WEBGL);
    c.parent("content");
    //create helper functions and the colour palette
    helpers = new HelperFunctions();
    // colourP = new ColourPalette();
    //  sprayCan = new sprayCanTool();
    //create a toolbox for storing the tools
    // toolbox = new Toolbox();
    // //add the tools to the toolbox. 
    // toolbox.addTool(new LineToTool());
    // toolbox.addTool(new rectangleTool());
    // toolbox.addTool(new ellipseTool());
    // toolbox.addTool(new eraserTool());
    capture = createCapture(VIDEO);
    //zoom in
    capture.size(320, 240);
    capture.hide();
    cols = 20;
    rows = height / 20;
}

function draw() {
    //drag to move.
    orbitControl();
    background(255);
    if (toggleCam) {
        push();
        translate(-width / 2, -height / 2);
        scale(1 * zoom);
        image(capture, 0, 0, width, height);
        pop();
    } else {
        push();
        translate(-width / 2, -height / 2);
        image(img_lawnDemo, 0, 0, width, height);
        pop();
    }
    push();
    // translate(0, 0);
    rotateX(PI / 3);
    fill(200, 200, 200, 20);
    translate((-cols * scl / 2) + moveOffSetW, (-height / 2) + moveOffSetH);
    for (var y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl);
            vertex(x * scl, (y + 1) * scl);
        }
        endShape();
    }
    pop();

    push();
    //  normalMaterial(200);
    rotateX(PI / 1.2);
    scale(scPlant0);
    texture(plants0Text);
    model(plants0);
    pop();

    push();
    translate(-100, 50, 50);
    rotateX(PI / 1.2);
    rotateY(PI / 1.5);
    scale(scPlant1);
    texture(plants1Text);
    model(plants1);
    pop();

    push();
    translate(50, 30, 10);
    rotateX(PI / 1.2);
    rotateY(PI / 1.5);
    scale(scPlant2);
    normalMaterial();
    model(plants2);
    pop();

    push();
    translate(150, 20, 10);
    rotateX(PI / 1.2);
    rotateY(PI);
    scale(scPlant3);
    normalMaterial();
    model(plants3);
    pop();

    push();
    translate(150, 32, 90);
    rotateX(PI / 1.2);
    rotateY(PI);
    scale(scPlant4);
    normalMaterial();
    model(plants4);
    pop();

    push();
    translate(20, 66, 110);
    rotateX(PI / 1.2);
    rotateY(PI);
    scale(scPlant5);
    normalMaterial();
    model(plants5);
    pop();

    push();
    translate(-75, 66, 110);
    rotateX(PI / 1.2);
    rotateY(PI);
    scale(scPlant6);
    translate(-22, 0, 0);
    directionalLight(255, 0, 0, 0.25, 0.25, 0);
    normalMaterial();
    model(plants6);
    translate(-22, 0, 0);
    model(plants6);
    pop();

    push();
    translate(-175, 66, 110);
    rotateX(PI / 1.2);
    rotateY(PI);
    scale(scPlant7);
    texture(plants7Text);
    model(plants7);
    pop();

    push();
    translate(-205, 46, 90);
    rotateX(PI / 1.2);
    rotateY(PI);
    scale(scPlant8);
    texture(plants7Text);
    model(plants8);
    pop();

    push();
    translate(-175, 66, 110);
    rotateX(PI / 1.2);
    rotateY(PI);
    scale(scPlant9);
    texture(plants7Text);
    model(plants9);
    pop();

    var elPlants0 = document.getElementById('plants0');
    if (elPlants0) {
        elPlants0.addEventListener("click", function() {
            scPlant0 = 20;
        });
    }
    var elPlants1 = document.getElementById('plants1');
    if (elPlants1) {
        elPlants1.addEventListener("click", function() {
            scPlant1 = 20;
        });
    }
    var elPlants2 = document.getElementById('plants2');
    if (elPlants2) {
        elPlants2.addEventListener("click", function() {
            scPlant2 = 10;
        });
    }
    var elPlants3 = document.getElementById('plants3');
    if (elPlants3) {
        elPlants3.addEventListener("click", function() {
            scPlant3 = 200;
        });
    }
    var elPlants4 = document.getElementById('plants4');
    if (elPlants4) {
        elPlants4.addEventListener("click", function() {
            scPlant4 = 1;
        });
    }
    var elPlants5 = document.getElementById('plants5');
    if (elPlants5) {
        elPlants5.addEventListener("click", function() {
            scPlant5 = 15;
        });
    }
    var elPlants6 = document.getElementById('plants6');
    if (elPlants6) {
        elPlants6.addEventListener("click", function() {
            scPlant6 = 1;
        });
    }
    var elPlants7 = document.getElementById('plants7');
    if (elPlants7) {
        elPlants7.addEventListener("click", function() {
            scPlant7 = 0.3;
        });
    }
    var elPlants8 = document.getElementById('plants8');
    if (elPlants8) {
        elPlants8.addEventListener("click", function() {
            scPlant8 = 30;
        });
    }
    var elPlants9 = document.getElementById('plants9');
    if (elPlants9) {
        elPlants9.addEventListener("click", function() {
            scPlant9 = 1;
        });
    }
    //plants array
    //  var selectPlant = document.querySelectorAll(".sideDrawImg");
    //  var qty = selectPlant.length;
    //  for (let i = 0; i < qty; i++) {
    //          selectPlant[i].addEventListener("click", function () {
    //              push();
    //             //  normalMaterial();
    //              scale(500);
    //             //  translate(-width/2,-height/2);
    //             model(plants0);
    //             console.log("sdffdsds");
    //             box(100);
    //              pop();
    //      });
    //     selectPlant[i].addEventListener("click", test(),false);
    //  }
    //  function test() {
    //     push();
    //     //  normalMaterial();
    //      scale(500);
    //     //  translate(-width/2,-height/2);
    //     model(plants0);
    //     console.log("sdffdsds");
    //     box(100);
    //      pop();
    //  }
    //   translate(-canvasContainer.innerWidth()/2, -canvasContainer.innerHeight()/2);
    //   for (var y = 0; y < rows; y++) {
    //     beginShape(TRIANGLE_STRIP);
    //     for (var x = 0; x < cols; x++) {
    //       vertex(x*scl, y*scl);
    //       vertex(x*scl, (y+1)*scl);
    //     }
    //     endShape();
    //   }
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
    // if (toolbox.selectedTool.hasOwnProperty("draw")) {
    //     toolbox.selectedTool.draw();
    // } else {
    //     alert("it doesn't look like your tool has a draw method!");
    // }
    // gardenRowP = select('#gardenRowP');
    // gardenRowM = select('#gardenRowM');
    // gardenColP = select('#gardenColP');
    // gardenColM = select('#gardenColM');
    // gardenRow.input(updateGrid);
    // gardenCol.input(updateGrid);
    var elRowP = document.getElementById('gardenRowP');
    if (elRowP) {
        elRowP.addEventListener("click", function() {
            rows += 0.005;
        });
    }
    var elRowM = document.getElementById('gardenRowM');
    if (elRowM) {
        elRowM.addEventListener("click", function() {
            rows -= 0.005;
        });
    }
    var elColP = document.getElementById('gardenColP');
    if (elColP) {
        elColP.addEventListener("click", function() {
            cols += 0.005;
        });
    }
    var elColM = document.getElementById('gardenColM');
    if (elColM) {
        elColM.addEventListener("click", function() {
            cols -= 0.005;
        });
    }
    var elZoomP = document.getElementById("zoomP");
    if (elZoomP) {
        elZoomP.addEventListener("click", function() {
            zoom += 0.001;
        });
    }
    var elZoomM = document.getElementById("zoomM");
    if (elZoomM) {
        elZoomM.addEventListener("click", function() {
            zoom = constrain(zoom, 1, zoom - 0.001);
        });
    }
    var elMoveHP = document.getElementById("MoveHP");
    if (elMoveHP) {
        elMoveHP.addEventListener("click", function() {
            moveOffSetW -= 0.05;
        });
    }
    var elMoveHM = document.getElementById("MoveHM");
    if (elMoveHM) {
        elMoveHM.addEventListener("click", function() {
            moveOffSetW += 0.05;
        });
    }
    var elMoveVP = document.getElementById("MoveVP");
    if (elMoveVP) {
        elMoveVP.addEventListener("click", function() {
            moveOffSetH -= 0.05;
        });
    }
    var elMoveVM = document.getElementById("MoveVM");
    if (elMoveVM) {
        elMoveVM.addEventListener("click", function() {
            moveOffSetH += 0.05;
        });
    }
    var elReset = document.getElementById("reset");
    if (elReset) {
        elReset.addEventListener("click", function() {
            moveOffSetH = 0;
            moveOffSetW = 0;
            cols = 20;
            rows = height / 20;
        });
    }
    var elTogCam = document.getElementById("toggleCam");
    if (elTogCam) {
        elTogCam.addEventListener("change", function() {
            toggleCam = !toggleCam;
        });
    }

    
}
// document.querySelector("#gardenRow").addEventListener("click", function () {

//update grid according to input
function updateGrid() {
    clear();
    var col = gardenCol.html();
    var row = gardenRow.html();
    if (col > 10) {
        col = 10;
    }
    if (row > 10) {
        row = 10;
    }
    for (var x = 0; x < width; x += width / col) {
        for (var y = 0; y < height; y += height / row) {
            stroke(0);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
}

function drawFunc(evt, drawtabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(drawtabName).style.display = "block";
    evt.currentTarget.className += " active";
}