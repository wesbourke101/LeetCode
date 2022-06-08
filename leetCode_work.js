let nums = [1,2,3,4,5,7,0,4,6,22];
let target = 7;

function twoSum(nums, target) {
    let outPut = [];
    let valueTargetSubtract = 0;
    for (let i = 0; i < nums.length; i++) {
        valueTargetSubtract = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == valueTargetSubtract) {
                outPut.push(i)
                outPut.push(j)
                console.log(outPut)
                return outPut;
            }
        }
    }
};

twoSum(nums, target);