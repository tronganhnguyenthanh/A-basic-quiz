document.querySelector(".btn.btn-danger").addEventListener("click", function(){
    let answer2 = document.querySelector("#qt2").value;
    let convertAnswer2 = parseInt(answer2)
    if(answer2 === ""){
     alert("Please enter your answer");
     return;
    }
    switch (convertAnswer2){
       case 4:
         getRightAnswer()
         break;
       default:
         getWrongAnswer()
         break;
    }
   })
   
   function getRightAnswer(){
     document.querySelector("#result2").innerHTML = "<h2 class='text-center text-success'>" + " Right answer " + "</h2>"
     moveToNextQuestion()
   }
   
   function getWrongAnswer(){
     document.querySelector("#result2").innerHTML = "<h2 class='text-center text-danger'>" + " Wrong answer " + "</h2>"
   }
   
   function moveToNextQuestion(){
     setTimeout(() => {
       window.location.href = "question3.html"
     },1000);
   }