// let nums=[1,20,32,17,89,10,27,100]

// let max = 0;
// for(let i=0;i<nums.length;i++){
//     let currentValue = nums[i]
//     if(max<currentValue){
//         max = currentValue
//     }
// }
// console.log(max)



// let nums=[1,20,32,17,89,10,27,100]

// let max = 0;
// for(let i=0;i<nums.length;i++){

//     if(max<nums[i]){
//         max = nums[i]
//     }
// }
// console.log(max)



// let nums=[-1,-20,-32,-17,-89,-10,-27,-100]

// let min = 0;
// for(let i=1;i-nums.length;i++){
//     let currentValue = nums[i]
//     if(min>currentValue){
//         min = currentValue
//     }
// }
// console.log(min)


// let nums = [1,2,5,2,7,8,9]
// nums.sort()
// console.log(nums);


// let nums = [1,2,5,2,7,8,9]
// nums.sort((a,b) => a-b);
// console.log(nums[nums.length-1]);



// let nums = [1,2,5,2,7,8,9]
// nums.sort((a,b) => a-b);
// console.log(nums);


let nums = [1,2,3]
let SquaredNums = nums.filter(function(num){
    return nums > 2;
})