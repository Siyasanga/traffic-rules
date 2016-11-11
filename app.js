
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiLocationCounter = 1;
var previousLocationCounter;
var robots = [];
robots.push(new TrafficLight(taxiLocationCounter));

body.onkeydown = function(e){
    if(e.keyCode == 39 ){
      if(robots[taxiLocationCounter-1].state() != 'green'){
        return;
      }
      previousLocationCounter = taxiLocationCounter;
      taxiLocationCounter++;
      if(taxiLocationCounter == 10){
        taxiLocationCounter = 1;
      }
      robots[taxiLocationCounter-1] = new TrafficLight(taxiLocationCounter);
      moveTaxi(previousLocationCounter,taxiLocationCounter);
    }
    else if(e.keyCode == 37){
      if(robots[taxiLocationCounter-1].state() != 'green'){
        return;
      }
      previousLocationCounter = taxiLocationCounter;
      taxiLocationCounter--;
      if(taxiLocationCounter < 1){
        taxiLocationCounter = 9;
      }
      moveTaxi(previousLocationCounter,taxiLocationCounter);
    }
    if(e.keyCode == 40){
      robots[taxiLocationCounter-1].green();
    }
    else if(e.keyCode == 38){
      robots[taxiLocationCounter-1].red()
    }

    //right arrow : 39
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40

    displayMessage(e.keyCode);

    /*

    to move the taxi forward...
    when the right arrow is pressed
    work with `taxiLocationCounter`

    store the value of `taxiLocationCounter` in a variable called `previousLocationCounter`
    increment the `taxiLocationCounter`

    pass both to the `moveTaxi( previousLocationCounter,
        taxiLocationCounter)` function

    */

    // to make the second TrafficLight `Orange`


};
