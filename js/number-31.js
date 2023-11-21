function stooge_Sort(nums, left_End, right_End) {
    if (nums[right_End - 1] < nums[left_End]) {
        const temp = nums[left_End]
        nums[leftEnd] = nums[right_End - 1]
        nums[right_End - 1] = temp
    }
    const length = right_End - left_End
    if (length > 2) {
        const third = Math.floor(length / 3)
        stoogeSort(nums, leftEnd, right_End - third)
        stoogeSort(nums, left_End + third, right_End)
        stoogeSort(nums, left_End, right_End - third)
    }
    return nums
}
nums = [3, 1, 8, 9, 5]
console.log("Original Array: " + nums)
result = stooge_Sort(nums)
console.log("Sorted Array: " + result)
nums = [2, 4, 1, 7, 6, 9, 5]
console.log("Original Array: " + nums)
result = stooge_Sort(nums)
console.log("Sorted Array: " + result)
