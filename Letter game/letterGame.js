window.onload = function() {
var score =0;
var i=0;
var answer = "";
var words = ["hello",
             "today",
             "laptop",
             "phone",
             "scooter",
             "mouse"];

var hints =["hint for hello",
              "hint for today",
              "hint for laptop",
              "hint for phone",
              "hint for scooter",
              "hint for mouse"];



// showTheQuestion();
var currentWord = showTheQuestion();
function stringJumble(stringToBeShuffled){
  for (let u = 0; u<stringToBeShuffled.length; u++){
    var divideAt = Math.floor((Math.random() * (stringToBeShuffled.length-1))+1);
    var firstPartOfTheString = stringToBeShuffled.slice(0, divideAt);
    var secondPartOfTheString = stringToBeShuffled.slice(divideAt, stringToBeShuffled.length);
    var myNewString = secondPartOfTheString+firstPartOfTheString;
    return myNewString;
  }
}


function showTheQuestion() {
     var newWord = words[i];
     console.log(answer, i);
      var jumbledWord = stringJumble(newWord);
      document.getElementById("demo").innerHTML = jumbledWord;
      console.log(" jumbledWord = ",  jumbledWord);
      var newHint = hints[i];
      document.getElementById("hints").innerHTML = "Hint: "+newHint;
      i++;

      return newWord;
}

      var button = document.getElementById("button")
      button.addEventListener("click", function(){
        answer = document.getElementById('input').value;
        console.log("from input answer is ", answer);
        console.log("currentWord answer is ", currentWord);
        if (answer == currentWord) {
          alert("correct");
          score++;
        }
        else {
          alert("incorrect");
        }

      });
      var nextQuestion = document.getElementById("nextQuestion")
      nextQuestion.addEventListener("click", function(){
      console.log("i=",i);
      currentWord = showTheQuestion();
      });









}
