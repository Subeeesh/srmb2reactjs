
//program to check whether String input is numeric or not



function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the entirety of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
 var res=isNumeric("123");
 if(res==true){
     console.log("it is an integer");
 }
 else{
     console.log("it is not an integer");
 }