

let userGreet= prompt("Please enter your name");
alert("Hi " + userGreet);





const default_table=5;
const number_Of_Table= Number(prompt("Enter a number to print its multiplication table" , default_table));

 const content_Of_Table= number_Of_Table + " x 1" + " = " + number_Of_Table * 1 + "\n" +  number_Of_Table + " x 2" + " = " + number_Of_Table * 2 + "\n" +  number_Of_Table + " x 3" + " = " + number_Of_Table * 3 + "\n" +  number_Of_Table + " x 4" + " = " + number_Of_Table * 4  + "\n" +  number_Of_Table + " x 5" + " = " + number_Of_Table * 5  + "\n" +  number_Of_Table + " x 6" + " = " + number_Of_Table * 6  + "\n" +  number_Of_Table + " x 7" + " = " + number_Of_Table * 7  + "\n" +  number_Of_Table + " x 8" + " = " + number_Of_Table * 8  + "\n" +  number_Of_Table + " x 9" + " = " + number_Of_Table * 9  + "\n" +  number_Of_Table + " x 10" + " = " + number_Of_Table * 10 ;
 console.log(content_Of_Table);





  const city_Name= prompt("Please enter your city");

  if(city_Name==="karachi" || city_Name==="Karachi"){
     alert("Welcome to city of lights");
  }else{
     alert("Go back to your country");
  }

  



  
  const gender=prompt("Type Gender");

  if(gender==="Male" || gender==="male"){
     alert("Good Morning Sir");
 }
     else if(gender==="Female" || gender==="female") {
         alert("Good Morning Ma'am");    

 }else{
     alert("Not a valid value");
         }

  
    
   
    


  const signal=prompt("Please type signal color");
  if(signal==="red" || signal==="Red"){
     alert("Vehicles must stop");
  }

     else if(signal==="yellow" || signal==="Yellow"){
         alert("Vehicles should get ready to move");
     }

     else if(signal==="green" || signal==="Green"){
         alert("Vehicles can move now");
     }

  else{
     alert("Not a valid value");
  }   





 const fuel=Number(prompt("Type Remaining Fuel Please "));
 
 if(fuel < 0.25){
     alert("Please refill the fuel in your car");
 }else{
     alert("Congrats! You don't need to refill your fuel ");
 }




 

 let a=4;
 if(++a === 5){
    alert("given condition for variable a is true");  //Answer: True
 }




 let b=82;
 if(b++ === 83){
     alert("given condition for variable a is true"); //Answer: False
 }



 let c=12;
 if(c++ === 13){
   alert("condition 1 is true");  // Answer: True
 }

 if(c === 13){
     alert("condition 2 is true"); // Answer: False
 }

 if(++c < 14){
     alert("condition 3 is true");  // Answer: False
 }

 if(c === 14){
     alert("condition 4 is true");  // Answer: True
 }
 



 let materialCost = 20000;
 let laborCost = 2000;
 let totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");  //Answer: True
 }


 

 if (true){
 alert("True"); //Alert showing
 }
 if (false){
 alert("False"); //Not showing
 }






 const subj_1=Number(prompt("Please enter Maths marks"));
 const subj_2=Number(prompt("Please enter Physics marks"));
 const subj_3=Number(prompt("Please enter Chemistry marks"));
 const total_marks=Number(prompt("Please enter total marks"));
 console.log("Marks Sheet");
 console.log("Total marks: " + total_marks);
 const subj_total=subj_1 + subj_2 + subj_3;
 console.log("Marks obtained: " + subj_total);
 const st_percentage= subj_total / total_marks * 100;
 console.log("Percentage : " + st_percentage + "%");

 if(st_percentage >= 80){
     console.log("Grade: A-one \nRemarks: Excellent");
 }else if(st_percentage >= 70){
     console.log("Grade: A \nRemarks: Good");
 }else if(st_percentage >= 60){
     console.log("Grade: B \nRemarks: You need to improve");
 }else if(st_percentage <= 60){
     console.log("Grade: Fail \nRemarks: Sorry");
 }


 

  const product_one=prompt("Please eneter first product name");
  const product_one_price=Number(prompt("Please eneter first product price"));
  const product_one_qty=Number(prompt("Please eneter first product quantity"));
  const product_two=prompt("Please eneter second product name");
  const product_two_price=Number(prompt("Please eneter second product price"));
  const product_two_qty=Number(prompt("Please eneter second product quantity"));
  const shipping_charges= 250;
  const total_cost=product_one_price*product_one_qty+product_two_price*product_two_qty+shipping_charges;
  const discount=10;
  const discounted_amount=total_cost* discount / 100;
  const final_order_amount=total_cost-discounted_amount;

  console.log("Price of " + product_one + " is " + product_one_price);
  console.log("Qunatity of " + product_one + " is " + product_one_qty);
  console.log("Price of " + product_two + " is " + product_two_price);
  console.log("Qunatity of " + product_two + " is " + product_two_qty);
  console.log("Shipping Charges " + shipping_charges);

  if(total_cost > 2000){
     console.log("10% Discount Applied You've Purchase Above 2000 Price Products");
     console.log("Total cose of your order is " + total_cost);
     console.log("After Discounted price " + final_order_amount);
  }else{
     console.log("Total cose of your order is " + total_cost);
  }

 




 let prize=5;
 let guessNumber=Number(prompt("Guess the secret number and win the game"));

 if(guessNumber === 5){
     alert("Bingo! Correct answer");
 }
 else if(guessNumber === 4  || guessNumber === 6){
     alert("Close enough to the correct answer");
 }
 else{
     alert("Better luck next time");
 }

  







 const team_A=Number(prompt("Please enter Team A score"));
 const team_B=Number(prompt("Please enter Team B score"));

 if(team_A > team_B){
     alert("Team A Won the game");
 }
 else if(team_A < team_B){
     alert("Team B Won the game");
 }
 else if(team_A === team_B){
     alert("Game Tie");
 }






 let place="Pakistan";
 let mynum=1234;
 let status=true;

 if(place=== "Pakistan"){
 alert( place + " is a String");
 }

 if(mynum=== 1234){
 alert( mynum + " is a Number");
 }

 if(status=== true){
 alert( status + " is a Bolean");
 }



 const myString = "Hello, I'm a string";
 const myNumber = 42;
 const myBoolean = true;


 if (typeof myString === "string") {
 console.log("myString is a string:", myString);
 }

 if (typeof myNumber === "number") {
 console.log("myNumber is a number:", myNumber);
 }

 if (typeof myBoolean === "boolean") {
 console.log("myBoolean is a boolean:", myBoolean);
 }
  

 


 
 const user_input=Number(prompt("Please enter the number"));

 if(user_input % 2 === 0){
     console.log("Its an even number");
     
 }
 else if(user_input % 2 !== 0 ){
         console.log("Its an odd number");
     }
 else{
     console.log("Please type the number only");
 }


 
 const temperature=Number(prompt("Please type your area temperature"));
 if(temperature > 40){
     alert("It is too hot outside.");
 }
 else if(temperature > 30){
     alert("The Weather today is Normal.");
 }
 else if(temperature > 20){
     alert("Today’s Weather is cool.");
 }
 else if(temperature > 10){
     alert("OMG! Today’s weather is so Cool");
 }




 const first_num=Number(prompt("Please enter first number"));
 const second_num=Number(prompt("Please enter second number"));
 const choose_operator=prompt("Please type the operator +, -, *, /, % ");
 let result;

 if(choose_operator==="+"){
     result = first_num + second_num;
     alert(first_num + choose_operator + second_num + " result is " + result);
 }
 else if(choose_operator==="-"){
     result = first_num - second_num;
     alert(first_num + choose_operator + second_num + " result is " + result);
 }
 else if(choose_operator==="*"){
     result = first_num * second_num;
     alert(first_num + choose_operator + second_num + " result is " + result);
 }
 else if(choose_operator==="/"){
     result = first_num / second_num;
     alert(first_num + choose_operator + second_num + " result is " + result);
 }
 else if(choose_operator==="%"){
     result = first_num % second_num;
     alert(first_num + choose_operator + second_num + " result is " + result);
 }else{
     alert("Please type valid Numbers & Operators for perform Mathematics");
 }



 const week_day=prompt("Type the day name");

 if(week_day==="monday" || week_day==="tuesday" || week_day==="wednesday" || week_day==="thursday" || week_day==="friday" || week_day==="Monday" || week_day==="Tuesday" || week_day==="Wednesday" || week_day==="Thursday" || week_day==="Friday" ){
     alert("It's a week day");
 }else if(week_day==="saturday" || week_day==="Saturday"){
     alert("It's weekend");
 }else if(week_day==="sunday" || week_day==="Sunday"){
     alert("Yay! It's a holiday");
 }else{
     alert("Please type correct day name");
 }


 


  const user_score=Number(prompt("Please type the number"));

  if(user_score > 50){
     alert("You are passed");
  }else{
     alert("Try again!");
  }



   const compare_num_1=Number(prompt("Please enter the first number"));
   const compare_num_2=Number(prompt("Please enter the second number"));

   if(compare_num_1> compare_num_2){
     alert("The greater number of " + compare_num_1 + " and " + compare_num_2 + " is " + compare_num_1);
   }
   else if(compare_num_1 < compare_num_2){
     alert("The greater number of " + compare_num_1 + " and " + compare_num_2 + " is " + compare_num_2);
   }else if(compare_num_1 === compare_num_2){
     alert(compare_num_1 + " and " + compare_num_2 + " both numbers are equal ");
   }


   
    const user_lang=prompt("Please type the language for e.g english , turkish, spanish");

    if(user_lang=="english" || user_lang=="English"){
     console.log("Hello World");
    }else if(user_lang=="turkish" || user_lang=="Turkish"){
     console.log("Selam Dünya");
    }if(user_lang=="spanish" || user_lang=="Spanish"){
     console.log("Hola Mundo");
    }else{
     console.log("Hello World");
    }


 

    const num_check=Number(prompt("Please enter the number"));
    if(num_check > 0){
     alert("It's a positive number");
    }else{
     alert("It's a negative number");
    }




   const user_noun=prompt("Please type any noun");
   const user_number=Number(prompt("Please type number"));

   if(user_number > 1){
     alert(user_number+ " " + user_noun+"s");
   }else{
     alert(user_number+ " " + user_noun);
   }

