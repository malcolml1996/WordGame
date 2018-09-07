window.onload = function() {
var score =0;
var i=0;
var answer = "";
var words = ["sparta",
             "samsung",
             "deloitte",
             "volkswagen",
             "lenovo",
             " "];

var hints =["A training academy based in Richmond",
              "The world's largest supplier of mobile phones",
              "A multinational company which is one of the big four accounting organizations",
              "A German automotive manufacturing company",
              "The world's largest personal computer vendor",
              " "];



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
      document.getElementById("shuffledword").innerHTML = "Guess the word: "+jumbledWord;
      console.log(" jumbledWord = ",  jumbledWord);
      var newHint = hints[i];
      document.getElementById("hints").innerHTML = "Hint: "+newHint;
      i++;
      if (i == 6 && score>3) {
      alert("Well done you scored: "+ score)}
      if (i == 6 && score<=3) {
      alert("Try again, you only scored: " + score)}
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
          document.getElementById("input").value = "";
          document.getElementById("score").innerHTML = "Current score: "+score;
        }
        else {
          alert("incorrect");
        }

      });
      var nextQuestion = document.getElementById("nextQuestion")
      nextQuestion.addEventListener("click", function(){
      document.getElementById("input").value = "";
      console.log("i=",i);
      currentWord = showTheQuestion();

      });

}
