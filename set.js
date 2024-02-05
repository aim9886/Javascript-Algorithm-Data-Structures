// DataStructure

// Set

const set = new Set([1,2,3])
set.add(4) // to add the set
console.log(set.has(4)) // to check whether the set is present it shows true.
set.delete(3) // to delete one of the set
console.log(set.size);  // to check the bigger set in the o/p
set.clear() // to clear the set

for(const item of set) {
    console.log(item); // to display the set
}


// O/P: true
//       3