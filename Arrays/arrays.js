
function getSecondLargest(nums) {
    // Complete the function
let largest = nums[0];
let secondLargest = -1;
for(let i=1; i<nums.length; i++){
    if(nums[i] > largest){
        secondLargest = largest;
        largest = nums[i];
    } else if(nums[i] < largest && nums[i] > secondLargest){
        secondLargest = nums[i];
    }
}
return secondLargest;
}