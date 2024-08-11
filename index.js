function insertionSort(arr) {
    // Start from the second element (index 1) since the first element (index 0) is considered sorted
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];  // The element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];  // Shift the element to the right
            j--;  // Move to the previous element
        }
        
        // Insert the key at its correct position
        arr[j + 1] = key;
    }

    return arr;  // Return the sorted array
}

// Example usage:
let array = [12, 11, 13, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);