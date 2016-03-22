//------Looping a triangle--------//
var name = "shayangt";

for(var i = "#"; i.length < name.length; i +="#") {
	console.log(i);
}



//---------FizzBuzz------//
for(var i = 1; i <= 100; i++){
 
  if (i %3 ===0 && i %5 ===0){
    console.log( "FizzBuzz");
  }else if(i %3 ===0){
   console.log( "Fizz");
  }else if(i %5=== 0){
    console.log("Buzz");
  }else {
  console.log(i);
  }
}



//---------Chess board------//
var str = " ";
var char = 8;
for(var i= 0; i< char; i++){
  for(var j= 0; j< char; j++){
    var x = i+j;
  	if(x %2===0){
      str +=" ";
    }else {
      str +="#";
    }
  }
  str += "\n"
}
console.log(str);