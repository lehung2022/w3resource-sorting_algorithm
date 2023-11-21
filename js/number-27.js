/** 
 * License:shorturl.at/FSX26
 * @param {Array} array Array of numbers.
 * @param {Number} key Value to be searched
 * @param {Number} start start index position of array
 * @param {Number} end end index position of array
 * @return {Number} Position of the key element
 */
function binarySearch(array, key, start, end) {
    if (start === end) {
        if (array[start] > key) {
            return start
        } else {
            return start + 1
        }
    }

    if (start > end) {
        return start
    }

    const mid = Math.floor((start + end) / 2)

    if (array[mid] < key) {
        return binarySearch(array, key, mid + 1, end)
    } else if (array[mid] > key) {
        return binarySearch(array, key, start, mid - 1)
    } else {
        return mid
    }
}

/**
 * Binary Insertion Sort
 *
 * @param {Array} list List to be sorted.
 * @return {Array} The sorted list.
 */
function binaryInsertionSort(array) {
    const totalLength = array.length
    for (let i = 1; i < totalLength; i += 1) {
        const key = array[i]
        const indexPosition = binarySearch(array, key, 0, i - 1)
        array.splice(i, 1)
        array.splice(indexPosition, 0, key)
    }
    return array
}
arr = [3, 1, 8, 9, 5]
console.log("Original Array: " + arr)
result = binaryInsertionSort(arr)
console.log("Sorted Array: " + result)
arr = [2, 4, 1, 7, 6, 9, 5]
console.log("Original Array: " + arr)
result = binaryInsertionSort(arr)
console.log("Sorted Array: " + result)
