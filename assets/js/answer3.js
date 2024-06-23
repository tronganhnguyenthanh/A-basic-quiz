document.querySelector(".btn.btn-danger").addEventListener("click", function(){
    let answer3 = document.querySelector("#qt3").value;
    if(answer3 === ""){
      document.querySelector("#error").innerHTML = "<p class='text-center text-danger'>" + " Please enter your answer " + "</p>"
      return;
    }else{
      document.querySelector("#error").innerHTML = ""
    }
    switch (answer3){
       case "wolf wolf":
         getRightAnswer()
         break;
       default:
         getWrongAnswer()
         break;
    }
   })
   
   function getRightAnswer(){
     document.querySelector("#result3").innerHTML = "<h2 class='text-center text-success'>" + " Right answer " + "</h2>"
     moveToNextQuestion()
   }
   
   function getWrongAnswer(){
     document.querySelector("#result3").innerHTML = "<h2 class='text-center text-danger'>" + " Wrong answer " + "</h2>"
   }
   
   function moveToNextQuestion(){
     setTimeout(() => {
       window.location.href = "question4.html"
     },1000);
   }