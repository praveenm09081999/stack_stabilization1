/**
 * @param {number} N
 * @param {number[]} R
 * @return {number}
 */
function getMinimumDeflatedDiscCount(N, R) {
    // Write your code here
    let Max = R[N-1]
    let inflation = 0
    let minDisk = 0
    for(let i=N-2; i > -1; i--){
        if(R[i] >= Max){
        inflation = R[i] - Max + 1
        Max = Max -1
        minDisk ++
        console.log("max Num",Max, i)
      } else{
        Max = R[i]
        console.log("min Num",Max, i)
      }
        if(Max == 1 && i > 0){
        minDisk = -1
        break
      }
    }
    return minDisk;
  }