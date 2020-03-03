let jackPot = 12575;
let credit = 1000;
let match = 0;
let mismatch = 0;
let winns = 0;
let newWinnings = 0;
document.getElementById("jackPot").innerHTML = "Current JackPot It's :  £ " +jackPot;

function Person(firstName, lastName, lotteryNickName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.lotteryNickName = lotteryNickName;
  this.age = age;
}

var firstName = prompt("firstName : ");
var lastName = prompt("lastName : ");
var lotteryNickName = prompt("lotteryNickName : ");
var age = prompt("age : ");
var myPerson = new Person(firstName,lastName,lotteryNickName,age);

if(myPerson.age < 18 ){
  document.getElementById("interdiction").innerHTML = "You don't have the legal age allowed to play!!! Sorry. ";
} else{
document.getElementById("playerName").innerHTML ="Welcome : " + myPerson.firstName +" "+ myPerson.lastName+".";
document.getElementById("nick").innerHTML = " Welcome : " + myPerson.lotteryNickName + " to PLAY !!!";
document.getElementById("age").innerHTML = "Age limit accepted : " + myPerson.age;
}

let luckyNumbers = [2,5,10,17];

document.getElementById("setnum1").innerHTML = luckyNumbers[0];
document.getElementById("setnum2").innerHTML = luckyNumbers[1];
document.getElementById("setnum3").innerHTML = luckyNumbers[2];
document.getElementById("setnum4").innerHTML = luckyNumbers[3];

function generate(sizeArray,lowestNumber,highestNumber){
let luckyNumbersMein = [];

  for(let i=0;i<sizeArray;i++){
    let add = true;
    let luckyNum = Math.floor((Math.random()*highestNumber)+1);
      for(let j=0;j<highestNumber;j++){
        if(luckyNumbersMein[j] == luckyNum) {
          add = false;
        }
      }
      if(add){
        luckyNumbersMein.push(luckyNum);
      }else {
        i--;
      }

    document.getElementById("mylucknum1").innerHTML=luckyNumbersMein[0];
    document.getElementById("mylucknum2").innerHTML=luckyNumbersMein[1];
    document.getElementById("mylucknum3").innerHTML=luckyNumbersMein[2];
    document.getElementById("mylucknum4").innerHTML=luckyNumbersMein[3];

    }


//this is the winnings section calculator from credit 1000 substarcts all eventual gains
    for(let m=0;m<luckyNumbersMein.length;m++){
      let n = luckyNumbers.indexOf(luckyNumbersMein[m]);
      if(n>=0) {console.log("match found"+m);
      document.getElementById("winloss"+m).innerHTML = "WINNER + £100";
      match++;
    }else {
      console.log("no match found" + m);
      document.getElementById("winloss"+m).innerHTML = "LOOZER - £25";
      mismatch++;
    }
    winns=(match*100 + mismatch*(-25));
    console.log(winns);
  }
  console.log("pozitive finds :" + match);
  console.log("negative finds :" + mismatch);
  newWinnings=credit+winns;
document.getElementById("credit").innerHTML = "Credit : £"+ newWinnings;
console.log(newWinnings);

    console.log("--------------------");
    return luckyNumbersMein;
  }

  function cashOut(jackPot,newWinnings){
    if(newWinnings <=1000){
      alert("Mr/Mrs " + myPerson.lotteryNickName + " you have no winnings to cash out -£" + newWinnings);
    }else if(newWinnings > 1000){
        let cashOutt =  newWinnings - 1000;
        alert("Mr/Mrs " + myPerson.lotteryNickName + " you won: " + cashOutt);
        let newJackPot = jackPot - cashOutt;
        document.getElementById("jackPot").innerHTML = "Current JackPot It's :  £ " + newJackPot;
        window.location.reload();
      }/*else if(newWinnings<=0){
        alert("Sorry !!!" + myPerson.lotteryNickName + " you reached the limit of your credit. Game Over!!!");
        window.location.reload();
      }*/
    }




















  //console.log(luckyNumbers);
