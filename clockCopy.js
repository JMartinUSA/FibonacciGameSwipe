var hours;
var minutes;

var one = 0;
var one2 = 0;
var two = 0;
var three = 0;
var five = 0;

function changeClock(){

    if(clockIsActive){
        var currentTime = new Date()
        hours = currentTime.getHours()
        minutes = currentTime.getMinutes()
    }else{
        hours = Math.ceil(Math.random()*12);
        minutes = (Math.ceil(Math.random()*12))*5;
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (minutes == 60){
            minutes = 0;
    }
    if (hours > 12){
            hours = hours - 12
    }
    // Time override
    //var hours = 5
    //var minutes = 45
    // the line below will need to be removed
    //confirm(hours+":"+minutes)
    

    one = 0
    one2 = 0
    two = 0
    three = 0
    five = 0

    if (hours === 1){
        one = 1
    }
    if (hours === 2){
        two = 1
    }
    if (hours === 3){
        three = 1
    }
    if (hours === 4){
        three = 1
        one2 = 1
    }
    if (hours === 5){
        five = 1
    }
    if (hours === 6){
        three = 1
        two = 1 
        one2 = 1 
    }
    if (hours === 7){
        one = 1
        five = 1
        one2 = 1
    }
    if (hours === 8){
        three = 1
        five = 1
    }
    if (hours === 9){
        one = 1
        one2 = 1
        two = 1
        five = 1
    }
    if (hours === 10){
        two = 1
        three = 1
        five = 1
    }
    if (hours === 11){
        one = 1
        two = 1
        three = 1
        five = 1
    }
    if (hours === 12){
        one = 1
        one2 = 1
        two = 1
        three = 1
        five = 1
    }

    if (minutes >= 5 && minutes < 10){
        one = one + 2
    }
    if (minutes >= 10 && minutes < 15){
        two = two + 2
    }
    if (minutes >= 15 && minutes < 20){
        two = two + 2
        one2 = one2 + 2
    }
    if (minutes >= 20 && minutes < 25){
        one = one + 2
        three = three + 2
    }
    if (minutes >= 25 && minutes < 30){
        five = five + 2
    }
    if (minutes >= 30 && minutes < 35){
        three = three + 2
        two = two + 2
        one = one + 2
    }
    if (minutes >= 35 && minutes < 40){
        five = five + 2
        one = one + 2
        one2 = one2 + 2
    }
    if (minutes >= 40 && minutes < 45){
        five = five + 2
        three = three + 2
    }       
    if (minutes >= 45 && minutes < 50){
        five = five + 2
        three = three + 2
        one = one + 2
    }
    if (minutes >= 50 && minutes < 55){
        two = two + 2
        five = five + 2
        three = three + 2
    }
    if (minutes >= 55 && minutes < 60){
        one = one + 2
        two = two +2
        three = three + 2
        five = five + 2
    }

    if(clockIsActive){
        if (one === 1){
            document.getElementById("oneClock").style.background = "red";
        }
        if (one === 2){
            document.getElementById("oneClock").style.background = "blue";
        }
        if (one === 3){
            document.getElementById("oneClock").style.background = "purple";
        }


        if (one2 === 1){
            document.getElementById("one2Clock").style.background = "red";
        }
        if (one2 === 2){
            document.getElementById("one2Clock").style.background = "blue";
        }
        if (one2 === 3){
            document.getElementById("one2Clock").style.background = "purple";
        }

        if (two === 1){
            document.getElementById("twoClock").style.background = "red";
        }
        if (two === 2){
            document.getElementById("twoClock").style.background = "blue";
        }
        if (two === 3){
            document.getElementById("twoClock").style.background = "purple";
        }

        if (three === 1){
            document.getElementById("threeClock").style.background = "red";
        }
        if (three === 2){
            document.getElementById("threeClock").style.background = "blue";
        }
        if (three === 3){
            document.getElementById("threeClock").style.background = "purple";
        }

        if (five === 1){
            document.getElementById("fiveClock").style.background = "red";
        }
        if (five === 2){
            document.getElementById("fiveClock").style.background = "blue";
        }
        if (five === 3){
            document.getElementById("fiveClock").style.background = "purple";
        }


        if (one === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("oneClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("oneClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("oneClock").style.background = "green";
            }
        }

        if (one2 === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("one2Clock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("one2Clock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("one2Clock").style.background = "green";
            }
        }
        

        if (two === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("twoClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("twoClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("twoClock").style.background = "green";
            }
        }
        

        if (three === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("threeClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("threeClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("threeClock").style.background = "green";
            }
        }
        

        if (five === 0){
            var random = Math.random();
            if (random < .33){
           document.getElementById("fiveClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("fiveClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("fiveClock").style.background = "green";
            }
        }
    }else if(gameIsActive){
        if (one === 1){
            document.getElementById("oneGame").style.background = "red";
        }
        if (one === 2){
            document.getElementById("oneGame").style.background = "blue";
        }
        if (one === 3){
            document.getElementById("oneGame").style.background = "purple";
        }


        if (one2 === 1){
            document.getElementById("one2Game").style.background = "red";
        }
        if (one2 === 2){
            document.getElementById("one2Game").style.background = "blue";
        }
        if (one2 === 3){
            document.getElementById("one2Game").style.background = "purple";
        }

        if (two === 1){
            document.getElementById("twoGame").style.background = "red";
        }
        if (two === 2){
            document.getElementById("twoGame").style.background = "blue";
        }
        if (two === 3){
            document.getElementById("twoGame").style.background = "purple";
        }

        if (three === 1){
            document.getElementById("threeGame").style.background = "red";
        }
        if (three === 2){
            document.getElementById("threeGame").style.background = "blue";
        }
        if (three === 3){
            document.getElementById("threeGame").style.background = "purple";
        }

        if (five === 1){
            document.getElementById("fiveGame").style.background = "red";
        }
        if (five === 2){
            document.getElementById("fiveGame").style.background = "blue";
        }
        if (five === 3){
            document.getElementById("fiveGame").style.background = "purple";
        }

        if (one === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("oneGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("oneGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("oneGame").style.background = "green";
            }
        }

        if (one2 === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("one2Game").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("one2Game").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("one2Game").style.background = "green";
            }
        }
        

        if (two === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("twoGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("twoGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("twoGame").style.background = "green";
            }
        }
        

        if (three === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("threeGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("threeGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("threeGame").style.background = "green";
            }
        }
        

        if (five === 0){
            var random = Math.random();
            if (random < .33){
           document.getElementById("fiveGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("fiveGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("fiveGame").style.background = "green";
            }
        }
        }
    }

    
    
function autoRefresh(){
    if(clockIsActive){
        changeClock();
    }
}
 
setInterval('autoRefresh()', 5000); // this will reload page after every 30 secounds;
    