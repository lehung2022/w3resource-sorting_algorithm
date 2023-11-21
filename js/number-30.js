function pigeonHole_Sort(nums) {
    let min_val = nums[0]
    let max_val = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max_val) { max_val = nums[i] }
        if (nums[i] < min_val) { min_val = nums[i] }
    }

    const range = max_val - min_val + 1
    const data = Array(range).fill(0)

    for (let i = 0; i < nums.length; i++) {
        data[nums[i] - min_val]++
    }

    let index = 0

    for (let j = 0; j < range; j++) {
        while (data[j]-- > 0) {
            nums[index++] = j + min_val
        }
    }
    return nums
}
nums = [3, 1, 8, 9, 5]
console.log("Original Array: " + nums)
result = pigeonHole_Sort(nums)
console.log("Sorted Array: " + result)
nums = [2, 4, 1, 7, 6, 9, 5]
console.log("Original Array: " + nums)
result = pigeonHole_Sort(nums)
console.log("Sorted Array: " + result)
