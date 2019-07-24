/*let age = 17;
let country = "UK";

if (age > 17 && country == "UK"){
    console.log ("You are old enough.")
}

else {
    console.log ("You aren't old enough.")
}

//challenge 1 if the number is divisble by 5 with no remainder or...

let num = 3;
​
if (num % 5 == 0 || num % 3 == 0) {
  console.log("This number is divisible by 3 or 5");
} 
else {
  console.log("This number is not divisible by 3 or 5");
}

//challenge 2 if the value is equal to the the variable 

let num = 10
let x = 3
let y = 5
if (num %x===.0 || y===.0 ){
    console.log("this number is divisable by 3 or 5");
}
else {
    console.log("this number is not divisable by 3 or 5")
}

//challenge 3

let num = 44
if (num % 3 == 0 && num % 5 == 0) {
    console.log(`fizz buzz`);
}
else if (num % 3 == 0) {
    console.log(`fizz`);
}
else if (num % 5 == 0) {
    console.log(`buzz`);
}
else {
    console.log(num);
} 

 ///challenge 1 extra Palindrome 

 function checkPalindrome(str){
    let i, len = str.length;
    for(i = 0; i < len / 2; i++){
      if (str[i]!== str[len -1 -i])
         return false;
    }
    return true;
  }

  console.log(checkPalindrome('abba')); ;
 
 ;*/

 // Noughts and crosses board challenge 


 let space1 = "O" 
 let space2 = "X" 
 let space3 = "O"
 let space4 = "X"
 let space5 = "X"
 let space6 = ""
 let space7 = "O"
 let space8 = ""
 let space9 = ""
 console.log("   |   |   ");
 console.log(` ${space1} | ${space2} | ${space3}`);
 console.log("   |   |   ");
 console.log("___________");
 console.log("   |   |   ");
 console.log(` ${space4} | ${space5} | ${space6} `);
 console.log("   |   |   ");
 console.log("___________");
 console.log("   |   |   ");
 console.log(` ${space7} | ${space8}  | ${space9}`);
 console.log("   |   |   ");
 
 if (space1 ==="X" && space2 ==="X" && space3 ==="X"){
     console.log("X wins");
 }
 else if (space1 ==="O" && space2 ==="O" && space3 ==="O"){
     console.log("O wins")
 }
 else {
     console.log("try again");
 }