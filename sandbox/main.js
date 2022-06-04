function check(){

var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var correct = 0;

  if (question1 > 18 && question2 =="Horror"){
    document.write("Alien Isolation");
        
    }
    else if (question1 > 13 && question1 < 19 && question2 =="Horror") {
    document.write("Subnautica");
    }
    else if (question1 <= 12 && question2 =="Horror") {
    document.write("Five Night's at Freddies"); 
    }
    else {
      document.write(" ");
    }


if (question1 > 18 && question2 =="Survival"){
    document.write("The Forrest");
        
    }
    else if (question1 > 13 && question1 < 19 && question2 =="Survival") {
    document.write("Fallout");
    }
    else if (question1 <= 12 && question2 =="Survival") {
    document.write("Minecraft"); 
    }
    else {
      document.write(" ");
    }


  if (question1 > 18 && question2 =="Adventure"){
    document.write("World of Warcraft");
        
    }
    else if (question1 > 13 && question1 < 19 && question2 =="Adventure") {
    document.write("Horizon Zero Dawn");
    }
    else if (question1 <= 12 && question2 =="Adventure") {
    document.write("Animal Adventure"); 
    }
    else {
      document.write(" ");
    }
  
 
  document.getElementById("after_submit").style.visibility = "visible";


  document.getElementbyId("message").innerHTML = messages[range];

 
}