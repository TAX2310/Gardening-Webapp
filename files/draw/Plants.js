function Plants() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.isOn = false;

    this.checkBound = function() {
        if(mouseX>this.x-30&&mouseX<this.x+30&&mouseY>this.y-30&&mouseY<this.y+30) {
            this.isOn = true;
        }else {
            this.isOn = false;
        }
    };

    this.drag = function() {
        if(this.isOn) {
            if(mouseIsPressed) {
                this.x = mouseX-width/2;
                this.y = 0;
                this.z = mouseY-height/2;
            }
        }
    };
}