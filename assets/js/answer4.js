document.querySelector(".btn.btn-danger").addEventListener("click", function(){
  let answer4 = document.querySelector("#qt4").value
  if(answer4 === ""){
    document.querySelector("#error").innerHTML = "<p class='text-center text-danger'>" + " Please enter your answer " + "</p>"
    return;
   }else{
    document.querySelector("#error").innerHTML = ""
   }
   switch (answer4) {
     case "lion":
       getRightAnswer()
       break;
     case "leopard":
       getRightAnswer()
       break;
     case "cheetah":
       getRightAnswer()
       break;
     case "jaguar":
       getRightAnswer()
       break;
     case "tiger":
       getRightAnswer()
       break;
     default:
       getWrongAnswer()
       break;
    }
   })
   
   function getRightAnswer(){
     document.querySelector("#result4").innerHTML = "<h2 class='text-center text-success'>" + " Right answer " + "</h2>"
     setTimeout(function(){
      window.location.href = "endQuiz.html"
     },1000)
   }
   
   function getWrongAnswer(){
     document.querySelector("#result4").innerHTML = "<h2 class='text-center text-danger'>" + " Wrong answer " + "</h2>"
   }

   function replayAQuiz(){
     window.location.href = "question1.html"
   }