
// So what does the below function mean for 
// the space complexity? 

function double(arr: Array<number>): Array<number> {
    // the space taken up is directly proportionate 
    // to n of the input arr above
    let newArr: Array<number> = [];
    for (let i: number = 0; i < arr.length; i++) {
      newArr.push(2 * arr[i]);
    }
    console.log(newArr)
    return newArr;
    // above we have n numbers, we get O(n) space
  } 
  
  double([1,2,3])

  export default double