//variables for numbers and crystals
var randomNum = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var totalScore = 0;
var wins = 0;
var loses = 0;

$(document).ready(function () {
    console.log("running");

    //functions
    function pickRandomCrystal() {//This function generates random numbers for the crystals in each game
        crystal1=Math.floor((Math.random() * 11)+ 1);
        crystal2=Math.floor((Math.random() * 11)+ 1);
        crystal3=Math.floor((Math.random() * 11)+ 1);
        crystal4=Math.floor((Math.random() * 11)+ 1);
        console.log("running in Pickrandomcrystal function");
    }

    function pickRandomNum() {
        randomNum=Math.floor((Math.random() *101)+19);
        //this will show the random number
        $("#randomNum").text(randomNum);
        pickRandomCrystal();
    }

    function clickCrystals(){
        //jesus christ they are minerals marie
        $("#crystal1").click(function () {
            console.log("crystal1");
            totalScore+=crystal1;
            $("#totalScore").text(totalScore);
            numberCheck();
        })
        $("#crystal2").click(function() {
            totalScore+=crystal2;
            $("#totalScore").text(totalScore);
            numberCheck();
        })
        $("#crystal3").click(function() {
            totalScore+=crystal3;
            $("#totalScore").text(totalScore);
            numberCheck();
        })
        $("#crystal4").click(function() {
            totalScore+=crystal4;
            $("#totalScore").text(totalScore);
            numberCheck();
        })
    }

    //resets the game and win and lose
    function resetGame() {
        $("#totalScore").empty();
        pickRandomNum();
        totalScore=0;
    }

    function numberCheck() {
        if(totalScore === randomNum) {
            alert("You are a winner!");
            wins++;
            $("#wins").text(wins);
            resetGame();
        }
        if(totalScore>randomNum) {
            alert("You failed");
            loses++;
            $("#loses").text(loses);
            resetGame();
        }
    }


    //call functions
    pickRandomCrystal();
    clickCrystals();
    pickRandomNum();
});