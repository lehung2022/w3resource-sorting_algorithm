const alpha_Numerical_Sort = (x, y) => {
    return x.localeCompare(y, undefined, { numeric: true })
}
const nums = ['25', '0', '15', '5']
console.log("Original array: " + nums)
result = nums.sort(alpha_Numerical_Sort)
console.log("Sorted Array: " + result)
const nums1 = ['q', 'r', 's', 'p']
console.log("Original array: " + nums1)
result = nums1.sort(alpha_Numerical_Sort)
console.log("Sorted Array: " + result)

const nums2 = ['3', 'p1q15r', 'z', 'p1q14r']
console.log("Original array: " + nums2)
result = nums2.sort(alpha_Numerical_Sort)
console.log("Sorted Array: " + result)
