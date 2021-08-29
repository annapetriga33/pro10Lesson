function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];   
      }
     }
   return max;
   }
  
  console.log(max([8]), 'one element test, must return 8');
  console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
  console.log(max([8, 17]), '2 elements test, must return 17');
  
  
  function max(arr, index = 0) {
    if (index < arr.length) {
      return Math.max(arr[index], max(arr, index + 1));
    } 
    return arr[0];
    }
  
  console.log(max([8]), 'one element test, must return 8');
  console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
  console.log(max([8, 17]), '2 elements test, must return 17');