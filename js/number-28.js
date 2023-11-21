/** 
 * License:shorturl.at/FSX26
 * cycleSort takes an input array of numbers and returns the array sorted in increasing order.
 *
 * @param {number[]} list An array of numbers to be sorted.
 * @return {number[]} An array of numbers sorted in increasing order.
 */


function cycle_Sort(list) {
    for (let cycleStart = 0; cycleStart < list.length; cycleStart++) {
        let value = list[cycleStart]
        let position = cycleStart

        // search position
        for (let i = cycleStart + 1; i < list.length; i++) {
            if (list[i] < value) {
                position++
            }
        }
        // if it is the same, continue
        if (position === cycleStart) {
            continue
        }
        while (value === list[position]) {
            position++
        }

        const oldValue = list[position]
        list[position] = value
        value = oldValue

        // rotate the rest
        while (position !== cycleStart) {
            position = cycleStart
            for (let i = cycleStart + 1; i < list.length; i++) {
                if (list[i] < value) {
                    position++
                }
            }
            while (value === list[position]) {
                position++
            }
            const oldValueCycle = list[position]
            list[position] = value
            value = oldValueCycle
        }
    }
    return list
}


arr = [3, 1, 8, 9, 5]
console.log("Original Array: " + arr)
result = cycle_Sort(arr)
console.log("Sorted Array: " + result)
arr = [2, 4, 1, 7, 6, 9, 5]
console.log("Original Array: " + arr)
result = cycle_Sort(arr)
console.log("Sorted Array: " + result)
