
let array = []
let n
let target


const binarySearchGuess = function(array,targetValue){
    var min = 0;
	var n = array.length;
	var max = n - 1;
    
    var guess;

    

    while(max >= min){
        
       guess = Math.floor((max+min)/2);
        if(array[guess]===targetValue)
        {   return guess;
            
        }else if(array[guess] < targetValue){
            min = guess +1;
        }else{
            max = guess -1;
        }
    }
	return -1;

    }
    