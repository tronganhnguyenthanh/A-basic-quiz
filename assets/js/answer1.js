document.querySelector(".btn.btn-danger").addEventListener("click", function(){
 let answer1 = document.querySelector("#qt1").value
 if(answer1 === ""){
   document.querySelector("#error").innerHTML = "<p class='text-center text-danger'>" + " Please enter your answer " + "</p>"
   return;
 }else{
   document.querySelector("#error").innerHTML = ""
 }
 switch (answer1) {
    case "Grass and water":
      getRightAnswer()
      break;
    default:
      getWrongAnswer()
      break;
 }
})

function getRightAnswer(){
  document.querySelector("#result1").innerHTML = "<h2 class='text-center text-success'>" + " Right answer " + "</h2>"
  moveToNextQuestion()
}

function getWrongAnswer(){
  document.querySelector("#result1").innerHTML = "<h2 class='text-center text-danger'>" + " Wrong answer " + "</h2>"
}

function moveToNextQuestion(){
  setTimeout(() => {
    window.location.href = "question2.html"
  },1000);
}