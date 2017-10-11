getContainerSize([0,1,0,2,1,0,1,3,2,0,1,0,2]);

function getContainerSize(inputArray){

    const STATE_START = 'START';
    const STATE_LEFT_DETECTED = 'LEFT';
    const STATE_RIGHT_DETECTED = 'RIGHT';

    let state = STATE_START;
    let leftWall = 0; 
    let rightWall = 0;
    let defect = 0;
    let totalWater = 0;
    let width = 0;
    let block= 0;
    for (let index in inputArray){
        block = inputArray[index];

        if (state == STATE_START && block > 0){
            state = STATE_LEFT_DETECTED;
            leftWall = block;
        }
        else if ((state == STATE_LEFT_DETECTED) && (block >= leftWall) ){
            state = STATE_RIGHT_DETECTED;  
            rightWall = block;  
            // tank completed 
            let water = ((leftWall * width)  - defect);

            totalWater += water;
            water = 0;
            defect = 0;
            leftWall = block; 
            rightWall = 0;
            width = 0;
            state = STATE_LEFT_DETECTED;

        }
        else if (block < leftWall){
            defect += block;
            width++;
        }
    }
    if (block <= leftWall){
        let water = ((block * width)  - defect);
        totalWater += water;
    }
    console.log(totalWater);
    return totalWater;
}