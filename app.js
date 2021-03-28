// var a=prompt("Enter your name:","Name:");
// document.write(a);

var a=12;                                                   //If statement
if(a==12);
document.write("You entered:"+a+"<br>");

var a=10;
var b=20;                                                      //If statement with logical operator
if((a==10)&&(b==20)){
          document.write("AHMAD TOUSEEF"+"<br>");
}
 

var a=10;
if((a==10))                                                 //If else statement in JS
document.write("Khan"+"<br>");
else
document.write("Wrong value"+"<br>");


var age=20;
if(age==20){                                                //else if statement in JS
          document.write("Your age is equal"+"<br>")
}
else if(age<20){
          document.write("Your age is less than 20"+"<br>")
}
else{
          document.write("Your age is more than 20"+"<br>")
}


var day=4;                                        //Switch statement in JS
switch(day){
          case 1:
                    document.write("SUNDAY"+"<br>");
                    break;
          case 2:
                    document.write("MONDAY"+"<br>");
                    break;
          case 3:
                    document.write("TUESDAY"+"<br>");
                    break;
          case 4:
                    document.write("WEDNESDAY"+"<br>");
                    break;
          case 5:
                    document.write("FRIDAY"+"<br>");
                    break;
          case 6:
                    document.write("SATURDAY"+"<br>");
                    break;
          default:
                    document.write("You entered wrong value"+"<br>");
}         


var day="SATURDAY";
switch(day){
          case "MONDAY":
          document.write("Working day");
          break;

          case "SATURDAY":
          case "SUNDAY":
          document.write("HOLIDAY");
          break;
          default:
          document.write("Wrong");
}          


