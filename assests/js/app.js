
var cl = console.log;


let Arr1 = [1,2,3,4,5,6]
let Arr2 = [1,2,3,4,5,6,7,8]
//check length
 function isArrEqual(Arr){
  if(Arr1.length != Arr2.length){
     cl(`Two arrays are not equal`) 
   } else{
     cl(`Two arrays are equal`)
   }
 }
 isArrEqual()


//check eachelement of array

for(let i = 0; i < Arr1.length ; i++){
  if(Arr1[i] != Arr2[i]){
    cl(`Two arrays are not equal`)
  } else {
    cl(`Two arrays are equal`)
  }
}