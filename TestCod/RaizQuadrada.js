 var isSquare = function(n){
     if (Number.isInteger(Math.sqrt(n))){
         return true
     } else {
         return false
     }  
}

console.log(isSquare(3))