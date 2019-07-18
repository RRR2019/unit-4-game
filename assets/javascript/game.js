//Global variables
var randomNumber = "";
var diamondValue = "";
var emeraldValue = "";
var gemValue = "";
var rubyValue = "";
var sumGems=0;
var wins=0;
var losts=0;

$( document ).ready(function() {
setValues();
showRandomNumber();
clickGems();
});

function setValues(){
sumGems=0;
randomNumber = Math.floor(Math.random() * (102)) + 19;
diamondValue = Math.floor(Math.random() * (12)) + 1;
emeraldValue = Math.floor(Math.random() * (12)) + 1;
gemValue = Math.floor(Math.random() * (12)) + 1;
rubyValue = Math.floor(Math.random() * (12)) + 1;
console.log("Magic number is " + randomNumber);
console.log("diamond value is " + diamondValue);
console.log("emerald value is " + emeraldValue);
console.log("gem value is " + gemValue);
console.log("ruby value is " + rubyValue);
}

function showRandomNumber(){
$("#randomNum").html(randomNumber);
}

function checkValues(check){  
        if(randomNumber===check){
            alert("You win!")
            wins++;
            var newWin= wins;
            $("#wins").html(newWin);
            reset();
        }
        else if(check>randomNumber){
            console.log("im inside the lost if")
            alert("you lost")      
            losts++;
            var newLost= losts;
            $("#losses").html(newLost);
            reset();    
        }
    }
            function clickGems(){
            $("#diamond").on("click", function(){
                sumGems=sumGems+diamondValue;
                console.log(sumGems);
                $("#score").html(sumGems);
                checkValues(sumGems);
            });
            $("#emerald").on("click", function(){
                sumGems=sumGems+emeraldValue;
                console.log(sumGems);
                $("#score").html(sumGems);
                checkValues(sumGems);
            });

            $("#gem").on("click", function(){
                sumGems=sumGems+gemValue;
                console.log(sumGems);
                $("#score").html(sumGems);
                checkValues(sumGems);
            });
            $("#ruby").on("click", function(){
                sumGems=sumGems+rubyValue;
                console.log(sumGems);
                $("#score").html(sumGems);
                checkValues(sumGems);
            });
        }
        


function reset()
{
 setValues();
$("#score").html(sumGems);
showRandomNumber();

}



