// DataStructures

// Linear Time Complexity (O(n)):

// O(n) - Linear Time: Algorithms with linear time complexity have execution times
//  that scale linearly with the size of the input data.
//   This means that as the input size increases, the time taken also increases proportionally.

function findMax(arr) {
    let maxVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }
    return maxVal;
}
