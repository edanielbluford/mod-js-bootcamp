
let array = []
let n
let target


const binarySearchGuess = function(array,targetValue){
    let min = 0;
	let n = array.length;
	let max = n - 1;
    
    let guess;

    let guessCount = 0

    while(max >= min){
        
        guessCount++
       guess = Math.floor((max+min)/2);
        if(array[guess]===targetValue)
        {   return guess;
            
        }else if(array[guess] < targetValue){
            min = guess +1;
            console.log(guess)
        }else{
            max = guess -1;
        }
    }
	return -1;

    }
    