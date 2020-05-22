function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.eat = function(pos) {
        var a = dist(this.x, this.y, pos.x, pos.y);
        if(a < 1) {
           this.total++;
            return true;
        }
        else{
            return false;
        }
    }
  
    this.move = function(x,y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.death = function(){
        for(var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if(d < 1) {
                text("GAME OVER !!",300,300);
                this.total = 0;
                this.tail = [];
            }
        }
    }

    this.update = function(){
        if(this.total === this.tail.length) {
            for(var i = 0; i < this.tail.length-1; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x, this.y);


        for(var i = 0; i < this.total; i++){
            this.tail[i] = this.tail[i+1];
        }
        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.xspeed*msr ;
        this.y = this.y + this.yspeed*msr ;

        this.x = constrain(this.x, 0, width-msr);
        this.y = constrain(this.y, 0, height-msr);
    }
  
    this.visible = function() {
        fill(255);
        for(var i = 0; i < this.tail.length ; i++){
          rect(this.tail[i].x, this.tail[i].y, msr, msr);
        }
        rect(this.x , this.y ,msr,msr);
  
    }
  }