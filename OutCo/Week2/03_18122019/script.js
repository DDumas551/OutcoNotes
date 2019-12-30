function coinSum(coins, total) {
  var T = new Array(total + 1);
  T[0] = 1;
  coins.forEach(coin => {
    for (var subTot = coin; subTot <= total; subTot++) {
      console.log(coin);
      T[subTot] = T[subTot] + T[subTot - coin];
    }
  });
  return T[subTot];
}
console.log(coinSum([1, 2, 3], 4));

// array of numbers, target
// how many combinations of those numbers add up to target

//tabulation approach

// 0
// 0 1 2 3 4 5 6 7 8 9 10
//[1 0 0 0 0 0 0 0 0 0 0 ]

//2
// 0 1 2 3 4 5 6 7 8 9 10
//[1 0 1 0 1 0 1 0 1 0 1 ]

//3
// 0 1 2 3 4 5 6 7 8 9 10
//[1 0 1 1 1 1 2 1 2 2 2 ]

//5
// 0 1 2 3 4 5 6 7 8 9 10
//[1 0 1 1 1 2 2 2 3 3 4 ]

//6
// 0 1 2 3 4 5 6 7 8 9 10
//[1 0 1 1 1 2 3 2 4 4 5 ]

// const coins = (arr, target) => {
//     if(!arr || arr.length === 0) return false;
//     let cashe = {};
//     let base = 0;
// }

// array.forEach(element => {

// });

// function coinSum(coins, total) {
//   //Init tab array of size total+1
//   let T = new Array(total + 1);
//   //Set base case condition of T[0] = 1
//   T[0] = 1;
//   //Loop over all coin denominations

//   coins.forEach(coin => {
//     for (var subTot = coin; subTot <= total; subTot++) {
//       //Add value at subTot-coin value to value at subTot
//       // in tabulation array
//       console.log(coin);

//       T[subTot] = T[subTot] + T[subTot - coin];

//       // subTot = 4, coin = 2

//       // T[4-2] = 1
//       // .        0       1
//       // T[4] = T[4] + T[4-2] = 1
//     }
//   });
//   // for(Integer coin: coins) {
//   //     //Loop from coin value to total
//   //     for(var subTot=coin; subTot <= total; subTot++){
//   //         //Add value at subTot-coin value to value at subTot
//   //         // in tabulation array
//   //         T[subTot] = T[subTot] + T[subTot-coin];

//   //         // subTot = 4, coin = 2

//   //         // T[4-2] = 1
//   //         // .        0       1
//   //         // T[4] = T[4] + T[4-2] = 1
//   //     }
//   // }
//   //Return the value at T[total]
//   return T[subTot];
// }

// console.log(coinSum([1, 2, 3], 4));
