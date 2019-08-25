
function Raindrop() {
    this.x = random(width);
    this.y = random(-200, -25);
    this.z = random(0, 20);
    this.yspeed = map(this.z, 0, 20, 3, 10);
    this.len = map(this.z, 0, 20, 10, 20);


    this.fall = function(){
        this.y += this.yspeed;

        if(this.y > height){
            this.y = random(-200, -50);
            this.yspeed = map(this.z, 0, 20, 0, 10);

        }
    }

    this.show = function(){

        var thick = map(this.z, 0, 20, 1, 5);

        strokeWeight(thick);
        stroke(180, 0, 255);
        line(this.x, this.y, this.x, this.y + this.len);//this.len);
    }
}