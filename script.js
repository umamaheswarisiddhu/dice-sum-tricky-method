//  1)Create a function that takes an array consisting of dice rolls from 1-6. Return the sum of your rolls with the following conditions: If a 1 is rolled, that is bad luck. The next roll counts as 0. If a 6 is rolled, that is good luck. The next roll is multiplied by 2. The array length will always be 3 or higher. --> -->
//  "sample: user has to click the button to roll the dice and gender the number, The Dice Rolls are : [5,5,5,1,6,1,1,3,1,3,6]
//  The summation of array of rolls [5 + 5 + 5 + 1 + 0 + 2 + 0 + 0 + 1 + 0 + 6] is : [25]"
// Dice Rolls are : [2,1,5,1,6,5,3,6,2]
//  The summation of array of rolls [2 + 1 + 0 + 1 + 0 + 10 + 3 + 6 + 4] is : [27]"
function dice(arr){
    let arr1 = [];
    let sum = 0;
    const d1 = arr.map((element) => element);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==1) {
            d1[i+1]=0
            arr1.push(d1[i])
            sum+=d1[i]
        }
        else if(arr[i]==6){
            d1[i+1]=d1[i+1]*2;
            arr1.push(d1[i])
            sum+=d1[i]
        }
         else{
            arr[i];
            arr1.push(d1[i])
            sum+=d1[i]
        }
        
    }return arr1;
}
console.log(dice([5,5,5,1,6,1,1,3,1,3,6]))
console.log(dice([2,1,5,1,6,5,3,6,2]))


