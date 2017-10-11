const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please input number (seat):', (seat) => {
    getOptimizedCost(seat)

  rl.close();
});

function getOptimizedCost(seat){
    const SEAT_TABLE = {  
        S:{seats: 5 , cost: 5},
        M:{seats: 10 , cost: 8},
        L:{seats: 15 , cost: 12}
    };
    let remainingSeats = seat;
    let bestCost = 0;
    let bestCount = 0;
    let selectedSize;

    // Calculate all information
    for (let key in SEAT_TABLE){

        let count = parseInt(remainingSeats / SEAT_TABLE[key].seats);
        if (remainingSeats % SEAT_TABLE[key].seats > 0){
            count++;
        }
        let cost = SEAT_TABLE[key].cost*count;
        if (bestCost > cost || bestCost == 0){
            selectedSize = key;
            bestCost = cost;
            bestCount = count;
        }
        
    }



    // print out the decided output
    console.log(selectedSize + ' x ' +  bestCount);
    console.log('Total = ' +  bestCost + '$');
}