// Code your solutions in this file


function writeCards(namesArray, eventName) {
    
    let messagesArray = [];

  
    for (let i = 0; i < namesArray.length; i++) {
    
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;

   
        messagesArray.push(message);
    }

 
    return messagesArray;
}

let result = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(result);





function countDown(startingNumber) {
  
    let count = startingNumber;


    while (count >= 0) {
        
        console.log(count);

    
        count--;
    }
}


countDown(10);
