function swap(nums, i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}

function odd_Even_Sort(nums) {
    let flag = false
    while (!flag) {
        flag = true
        for (let i = 1; i < nums.length - 1; i += 2) {
            if (nums[i] > nums[i + 1]) {
                swap(nums, i, i + 1)
                flag = false
            }
        }
        for (let i = 0; i < nums.length - 1; i += 2) {
            if (nums[i] > nums[i + 1]) {
                swap(nums, i, i + 1)
                flag = false
            }
        }
    }
    return nums
}
nums = [3, 1, 8, 9, 5]
console.log("Original Array: " + nums)
result = odd_Even_Sort(nums)
console.log("Sorted Array: " + result)
nums = [2, 4, 1, 7, 6, 9, 5]
console.log("Original Array: " + nums)
result = odd_Even_Sort(nums)
console.log("Sorted Array: " + result)
