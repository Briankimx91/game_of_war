var gameOfWar = new game();
function game(){
    var self = this;
    self.init = function(){
        this.eventHandlers();
    };
    var cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    self.eventHandlers = function(){
        $(document).ready(function(){

        });
    };
    self.init();
}
console.log(gameOfWar);